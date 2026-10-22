
/**
 * Shared booking utility functions
 *
 * Common logic for processing bookings with Google Calendar statuses.
 */

import {
  getBookingAttendeeStatuses,
  type BookingStatuses,
} from "@/lib/actions/calendar";

import type { AttendeeStatus } from "@/lib/google-calendar";

import type {
  HostBooking,
  HostUpcomingBooking,
} from "@/sanity/queries/bookings";

// ============================================================================
// Types
// ============================================================================

export type BookingWithGoogleEvent = Pick<
  HostBooking | HostUpcomingBooking,
  "_id" | "googleEventId" | "guestEmail"
>;

export type ProcessedBooking<T extends BookingWithGoogleEvent> = T & {
  guestStatus?: AttendeeStatus;
};

// ============================================================================
// Shared Processing Functions
// ============================================================================

export async function processBookingsWithStatuses<
  T extends BookingWithGoogleEvent
>(
  bookings: T[]
): Promise<{
  statuses: Record<string, BookingStatuses>;
  activeBookings: ProcessedBooking<T>[];
}> {
  const statuses = await getBookingAttendeeStatuses(
    bookings
      .filter((booking) => booking.googleEventId)
      .map((booking) => ({
        id: booking._id,
        googleEventId: booking.googleEventId,
        guestEmail: booking.guestEmail,
      }))
  );

  const activeBookings: ProcessedBooking<T>[] = bookings
    .filter((booking) => {
      const status = statuses[booking._id];

      return !booking.googleEventId || !status?.isCancelled;
    })
    .map((booking) => ({
      ...booking,
      guestStatus: statuses[booking._id]?.guestStatus,
    }));

  return { statuses, activeBookings };
}
