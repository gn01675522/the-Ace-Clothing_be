import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Product } from '../model/core/product/product.core';
import { ProductCategory } from '../model/auxiliary/product_category/product_category.aux';
import { ProductOrigin } from '../model/auxiliary/product_origin/product_origin.aux';
import { CustomerLevel } from '../model/auxiliary/customer_level/customer_level.aux';
import { Gender } from '../model/auxiliary/gender/gender.aux';
import { SizeGroup } from '../model/auxiliary/size_group/size_group.aux';
import { SizeValue } from '../model/auxiliary/size_value/size_value.aux';
import { SKU } from '../model/core/SKU/SKU.core';
import { SaleScope } from '../model/auxiliary/sale_scope/sale_scope.aux';
import { SaleType } from '../model/auxiliary/sale_type/sale_type.aux';
import { Coupon } from '../model/core/coupon/coupon.core';

import { productSeed } from './data/product.seed';
import { customerLevelSeed } from './data/customer_level.seed';
import { genderSeed } from './data/gender.seed';
import {
  productCategorySeed,
  subProductCategorySeed,
} from './data/product_category.seed';
import { productOriginSeed } from './data/product_origin.seed';
import { sizeGroupSeed, sizeValueSeed } from './data/size.seed';
import { SKUSeed } from './data/SKU.seed';
import { saleScopeSeed } from './data/sale_scope.seed';
import { saleTypeSeed } from './data/sale_type.seed';
import { couponSeed } from './data/coupon.seed';

@Injectable()
export class SeedService {
  constructor(
    @InjectModel(CustomerLevel.name)
    private readonly customerLevelModel: Model<CustomerLevel>,
    @InjectModel(ProductOrigin.name)
    private readonly productOriginModel: Model<ProductOrigin>,
    @InjectModel(Gender.name)
    private readonly genderModel: Model<Gender>,
    @InjectModel(SizeGroup.name)
    private readonly sizeGroupModel: Model<SizeGroup>,
    @InjectModel(SizeValue.name)
    private readonly sizeValueModel: Model<SizeValue>,
    @InjectModel(ProductCategory.name)
    private readonly productCategoryModel: Model<ProductCategory>,
    @InjectModel(Product.name)
    private readonly productModel: Model<Product>,
    @InjectModel(SKU.name)
    private readonly SKUModel: Model<SKU>,
    @InjectModel(SaleScope.name)
    private readonly saleScopeModel: Model<SaleScope>,
    @InjectModel(SaleType.name)
    private readonly saleTypeModel: Model<SaleType>,
    @InjectModel(Coupon.name)
    private readonly couponModel: Model<Coupon>,
  ) {}

  async genCustomerLevel() {
    console.log('🌱 Running Customer Level Seed...');

    try {
      await this.customerLevelModel.insertMany(customerLevelSeed, {
        ordered: false,
      });

      console.log('✅ Customer Level Seeding finished');
    } catch (e: any) {
      if (e?.writeErrors) {
        console.warn(
          '⚠️ Customer level duplicate records skipped:',
          e.writeErrors.length,
        );
      } else {
        throw e;
      }
    }
  }
  async genProductOrigin() {
    console.log('🌱 Running Product Origin Seed...');

    try {
      await this.productOriginModel.insertMany(productOriginSeed, {
        ordered: false,
      });

      console.log('✅ Product Origin Seeding finished');
    } catch (e: any) {
      if (e?.writeErrors) {
        console.warn(
          '⚠️ Product origin duplicate records skipped:',
          e.writeErrors.length,
        );
      } else {
        throw e;
      }
    }
  }
  async genGender() {
    console.log('🌱 Running Gender Seed...');

    try {
      await this.genderModel.insertMany(genderSeed, {
        ordered: false,
      });

      console.log('✅ Gender Seeding finished');
    } catch (e: any) {
      if (e?.writeErrors) {
        console.warn(
          '⚠️ Gender duplicate records skipped:',
          e.writeErrors.length,
        );
      } else {
        throw e;
      }
    }
  }
  async genSize() {
    console.log('🌱 Running Size Seed...');

    try {
      const sizeGroupResults = await this.sizeGroupModel.insertMany(
        sizeGroupSeed,
        { ordered: false },
      );

      const newSizeValue = sizeValueSeed.map((size) => {
        const targetGroup = sizeGroupResults.find(
          (group) => group.name === size.group_id,
        );

        if (!targetGroup)
          throw new Error('Cannot find size group, please try again!');

        return {
          ...size,
          group_id: targetGroup._id,
        };
      });

      await this.sizeValueModel.insertMany(newSizeValue, {
        ordered: false,
      });

      console.log('✅ Size Seeding finished');
    } catch (e: any) {
      if (e?.writeErrors) {
        console.warn(
          '⚠️ Size duplicate records skipped:',
          e.writeErrors.length,
        );
      } else {
        throw e;
      }
    }
  }
  async genProductCategory() {
    console.log('🌱 Running Product Category Seed...');

    try {
      const mainCategoryResults = await this.productCategoryModel.insertMany(
        productCategorySeed,
        { ordered: false },
      );

      console.log('🌱 Main Product Category Seeding finished...');

      const newSubCategory = subProductCategorySeed.map((item) => {
        const parent = mainCategoryResults.find(
          (category) => category.name === item.parent,
        );

        if (!parent)
          throw new Error('main category inserted failed, please try again!');

        return { ...item, parent: parent._id };
      });

      await this.productCategoryModel.insertMany(newSubCategory, {
        ordered: false,
      });

      console.log('🌱 Sub Product Category Seeding finished...');

      console.log('✅ Product Category Seeding finished');
    } catch (e: any) {
      if (e?.writeErrors) {
        console.warn(
          '⚠️ Product category duplicate records skipped:',
          e.writeErrors.length,
        );
      } else {
        throw e;
      }
    }
  }
  async genProduct() {
    console.log('🌱 Running Product Seed...');

    try {
      const findGender = await this.genderModel.find();
      const findCategory = await this.productCategoryModel.find();

      const newProductData = productSeed.map((product) => {
        const genderId = findGender.find(
          (gender) => gender.name === product.gender,
        );

        const categoryId = findCategory.find(
          (category) => category.name === product.category,
        );

        if (!genderId || !categoryId) {
          const missingTarget = !genderId ? 'gender id' : 'category id';

          throw new Error(`Cannot find ${missingTarget}, please try again!`);
        }

        return {
          ...product,
          gender: genderId._id,
          category: categoryId._id,
        };
      });

      await this.productModel.insertMany(newProductData, {
        ordered: false,
      });

      console.log('✅ Product Seeding finished');
    } catch (e: any) {
      if (e?.writeErrors) {
        console.warn(
          '⚠️ Product duplicate records skipped:',
          e.writeErrors.length,
        );
      } else {
        throw e;
      }
    }
  }
  async genSKU() {
    console.log('🌱 Running SKU Seed...');

    try {
      const findProduct = await this.productModel.find();
      const findSizeValue = await this.sizeValueModel.find();

      const newSKUData = SKUSeed.map((sku) => {
        const targetProduct = findProduct.find(
          (product) => product.name === sku.product_id,
        );
        const targetSize = findSizeValue.find(
          (size) => size.value === sku.size,
        );

        if (!targetProduct || !targetSize) {
          const missingTarget = !targetProduct ? 'product' : 'size';
          const missingTargetInfo = !targetProduct ? sku.product_id : sku.size;

          throw new Error(
            `Cannot find target ${missingTarget}: ${missingTargetInfo}, please try again!`,
          );
        }

        return {
          ...sku,
          product_id: targetProduct._id,
          size: targetSize._id,
        };
      });

      await this.SKUModel.insertMany(newSKUData, {
        ordered: false,
      });

      console.log('✅ SKU Seeding finished');
    } catch (e: any) {
      if (e?.writeErrors) {
        console.warn('⚠️ SKU duplicate records skipped:', e.writeErrors.length);
      } else {
        throw e;
      }
    }
  }
  async genSaleScope() {
    console.log('🌱 Running Sale Scope Seed...');

    try {
      await this.saleScopeModel.insertMany(saleScopeSeed, {
        ordered: false,
      });

      console.log('✅ Sale Scope Seeding finished');
    } catch (e: any) {
      if (e?.writeErrors) {
        console.warn(
          '⚠️ Sale Scope duplicate records skipped:',
          e.writeErrors.length,
        );
      } else {
        throw e;
      }
    }
  }
  async genSaleType() {
    console.log('🌱 Running Sale Type Seed...');

    try {
      await this.saleTypeModel.insertMany(saleTypeSeed, {
        ordered: false,
      });

      console.log('✅ Sale Type Seeding finished');
    } catch (e: any) {
      if (e?.writeErrors) {
        console.warn(
          '⚠️ Sale Type duplicate records skipped:',
          e.writeErrors.length,
        );
      } else {
        throw e;
      }
    }
  }
  async genCoupon() {
    console.log('🌱 Running Coupon Seed...');

    try {
      const findSaleScope = await this.saleScopeModel.find();
      const findSaleType = await this.saleTypeModel.find();

      const newCoupon = couponSeed.map((coupon) => {
        const targetSaleScope = findSaleScope.find(
          (scope) => scope.name === coupon.scope,
        );
        const targetSaleType = findSaleType.find(
          (type) => type.name === coupon.type,
        );

        if (!targetSaleScope || !targetSaleType) {
          const missingTarget = !targetSaleScope ? 'scope' : 'type';
          const missingTargetInfo = !targetSaleScope
            ? coupon.scope
            : coupon.type;

          throw new Error(
            `Cannot find target ${missingTarget}: ${missingTargetInfo}, please try again!`,
          );
        }

        return {
          ...coupon,
          scope: targetSaleScope._id,
          type: targetSaleType._id,
        };
      });
      const results = await this.couponModel.insertMany(newCoupon, {
        ordered: false,
      });

      console.log('✅ Coupon Seeding finished');
    } catch (e: any) {
      if (e?.writeErrors) {
        console.warn(
          '⚠️ Coupon duplicate records skipped:',
          e.writeErrors.length,
        );
      } else {
        throw e;
      }
    }
  }

  async seed() {
    console.log('🚀 Start seeding');

    try {
      await Promise.all([
        this.genCustomerLevel(),
        this.genProductOrigin(),
        this.genGender(),
        this.genProductCategory(),
        this.genSize(),
        this.genSaleScope(),
        this.genSaleType(),
      ]);

      await this.genProduct();
      await this.genSKU();
      await this.genCoupon();

      console.log('✅ Seeding finished');
    } catch (e: any) {
      console.error('❌ Seeding failed:', e);
    } finally {
      console.log('🔌 Finished seeding proccess');
    }
  }
}
