import { AdvertiserInterface } from 'interfaces/advertiser';
import { GetQueryInterface } from 'interfaces';

export interface PlacementInterface {
  id?: string;
  name: string;
  start_time: any;
  end_time: any;
  advertiser_id: string;
  created_at?: any;
  updated_at?: any;

  advertiser?: AdvertiserInterface;
  _count?: {};
}

export interface PlacementGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  advertiser_id?: string;
}
