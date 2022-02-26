import { GetCategoryDto } from './dto/get-category.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CategoriesService {
  constructor(private readonly prisma: PrismaService) {}
  async getAll(): Promise<Array<GetCategoryDto>> {
    const category = await this.prisma.category.findMany();

    if (!category) {
      throw new NotFoundException('Not Found !');
    }

    const getCategory: Array<GetCategoryDto> = [];
    category.map((e) => {
      getCategory.push({
        category_id: e.category_id,
        category_name: e.category_name,
      });
    });
    return getCategory;
  }
}
