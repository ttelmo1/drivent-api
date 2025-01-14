import { prisma } from '@/config';

async function findBookingByRoomId(roomId: number) {
  const booking = await prisma.booking.findFirst({
    where: {
      roomId: roomId,
    },
  });
  return booking.id;
}

async function createBooking(roomId: number, userId: number) {
  const booking = await prisma.booking.create({
    data: {
      roomId: roomId,
      userId: userId,
    },
  });
  return booking.id;
}

async function findBookingByUserId(userId: number) {
  const booking = await prisma.booking.findFirst({
    where: {
      userId: userId,
    },
  });
  return booking.id;
}

async function findBookingById(bookingId: number) {
  return prisma.booking.findFirst({
    where: {
      id: bookingId,
    },
  });
}

export default {
  findBookingByRoomId,
  createBooking,
  findBookingByUserId,
  findBookingById,
};
