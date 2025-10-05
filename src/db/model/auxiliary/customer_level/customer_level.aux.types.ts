import mongoose from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export enum CUSTOMER_LEVEL_CLASSES {
  normal = 'normal',
  gold = 'gold',
  platinum = 'platinum',
  diamond = 'diamond',
}
