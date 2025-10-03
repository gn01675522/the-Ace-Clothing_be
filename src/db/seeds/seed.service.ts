import { Injectable } from '@nestjs/common';

import { ProductService } from '../../domain/product/services/product.service';
import { OptionService } from '../../domain/option/services/option.service';
import { SKUService } from 'src/domain/SKU/services/SKU.service';

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

@Injectable()
export class SeedService {
  constructor(
    private readonly productService: ProductService,
    private readonly optionService: OptionService,
    private readonly SKUService: SKUService,
  ) {}

  async genCustomerLevel() {
    console.log('🌱 Running Customer Level Seed...');

    const results =
      await this.optionService.createCustomLevel(customerLevelSeed);

    console.log('✅ Customer Level Seeding finished');
    return results;
  }
  async genProductOrigin() {
    console.log('🌱 Running Product Origin Seed...');

    const results =
      await this.optionService.createProductOrigin(productOriginSeed);

    console.log('✅ Product Origin Seeding finished');
    return results;
  }
  async genGender() {
    console.log('🌱 Running Gender Seed...');

    const results = await this.optionService.createGender(genderSeed);

    console.log('✅ Gender Seeding finished');
    return results;
  }
  async genSize() {
    console.log('🌱 Running Size Seed...');
    const sizeGroupResults =
      await this.optionService.createSizeGroup(sizeGroupSeed);

    const newSizeValue = sizeValueSeed.map((size) => {
      const targetGroup = sizeGroupResults.find(
        (group) => group.name === size.group_id,
      );

      if (!targetGroup)
        throw new Error('Cannot find size group, please try again!');

      return { ...size, group_id: targetGroup.id };
    });

    const sizeValueResults =
      await this.optionService.createSizeValue(newSizeValue);

    console.log('✅ Size Seeding finished');
    return { sizeGroup: sizeGroupResults, sizeValue: sizeValueResults };
  }
  async genProductCategory() {
    console.log('🌱 Running Product Category Seed...');

    const mainCategoryResults =
      await this.optionService.createProductCategory(productCategorySeed);

    console.log('🌱 Main Product Category Seeding finished...');

    const newSubCategory = subProductCategorySeed.map((item) => {
      const parent = mainCategoryResults.find(
        (category) => category.name === item.parent,
      );
      if (!parent)
        throw new Error('main category inserted failed, please try again!');

      return { ...item, parent: parent.id };
    });

    const subCategoryResults =
      await this.optionService.createProductCategory(newSubCategory);

    console.log('🌱 Sub Product Category Seeding finished...');

    console.log('✅ Product Category Seeding finished');
    return [...mainCategoryResults, ...subCategoryResults];
  }
  async genProduct(gender: any[], category: any[]) {
    console.log('🌱 Running Product Seed...');

    const newProductData = productSeed.map((product) => {
      const genderId = gender.find((gender) => gender.name === product.gender);

      const categoryId = category.find(
        (category) => category.name === product.category,
      );

      if (!genderId || !categoryId) {
        const missingTarget = !genderId ? 'gender id' : 'category id';

        throw new Error(`Cannot find ${missingTarget}, please try again!`);
      }

      return {
        ...product,
        gender: genderId.id,
        category: categoryId.id,
      };
    });

    const results = await this.productService.create(newProductData);

    console.log('✅ Product Seeding finished');
    return results;
  }

  async genSKU(product: any[], sizeValue: any[]) {
    console.log('🌱 Running SKU Seed...');

    const newSKUData = SKUSeed.map((sku) => {
      const targetProduct = product.find(
        (product) => product.name === sku.product_id,
      );
      const targetSize = sizeValue.find((size) => size.value === sku.size);

      if (!targetProduct || !targetSize) {
        const missingTarget = !targetProduct ? 'product' : 'size';
        const missingTargetInfo = !targetProduct ? sku.product_id : sku.size;

        throw new Error(
          `Cannot find target ${missingTarget}: ${missingTargetInfo}, please try again!`,
        );
      }

      return {
        ...sku,
        product_id: targetProduct.id,
        size: targetSize.id,
      };
    });

    const results = await this.SKUService.create(newSKUData);

    console.log('✅ SKU Seeding finished');
    return results;
  }

  async seed() {
    await Promise.all([this.genCustomerLevel(), this.genProductOrigin()]);
    const genderResults = await this.genGender();
    const productCategoryResults = await this.genProductCategory();
    const { sizeValue } = await this.genSize();

    const productResults = await this.genProduct(
      genderResults,
      productCategoryResults,
    );
    await this.genSKU(productResults, sizeValue);

    console.log('✅ Seeding finished');
  }
}
