import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { authorizationValidationMiddleware, errorHandlerMiddleware } from 'server/middlewares';
import { advertiserValidationSchema } from 'validationSchema/advertisers';
import { convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  switch (req.method) {
    case 'GET':
      return getAdvertisers();
    case 'POST':
      return createAdvertiser();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getAdvertisers() {
    const data = await prisma.advertiser
      .withAuthorization({
        roqUserId,
        tenantId: user.tenantId,
        roles: user.roles,
      })
      .findMany(convertQueryToPrismaUtil(req.query, 'advertiser'));
    return res.status(200).json(data);
  }

  async function createAdvertiser() {
    await advertiserValidationSchema.validate(req.body);
    const body = { ...req.body };
    if (body?.placement?.length > 0) {
      const create_placement = body.placement;
      body.placement = {
        create: create_placement,
      };
    } else {
      delete body.placement;
    }
    const data = await prisma.advertiser.create({
      data: body,
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(authorizationValidationMiddleware(handler))(req, res);
}
