import { db } from '../drizzle/client';
import { subscriptions } from '../drizzle/schema/subscriptions';
import { redis } from '../redis/client';

interface getSubscriberInviteCountParams {
  subscriberId: string;
}

export async function getSubscriberInvitesCount({
  subscriberId,
}: getSubscriberInviteCountParams) {
  const count = await redis.zscore('referral:ranking', subscriberId);

  return { count: count ? Number.parseInt(count) : 0 };
}
