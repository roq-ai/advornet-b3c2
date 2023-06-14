import { PlacementInterface } from 'interfaces/placement';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface AdvertiserInterface {
  id?: string;
  description?: string;
  image?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  placement?: PlacementInterface[];
  user?: UserInterface;
  _count?: {
    placement?: number;
  };
}

export interface AdvertiserGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  image?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
