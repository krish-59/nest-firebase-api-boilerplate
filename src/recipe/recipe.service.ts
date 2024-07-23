import {
  Injectable,
  Inject,
  InternalServerErrorException,
} from '@nestjs/common';
import { CollectionReference, Timestamp } from '@google-cloud/firestore';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { RecipeCardDocument } from '../firestore/collections/recipeCards.document';

@Injectable()
export class RecipeService {
  constructor(
    @Inject(RecipeCardDocument.collectionName)
    private recipeCardsCollection: CollectionReference<RecipeCardDocument>,
  ) {}
  async create(createRecipeDto: CreateRecipeDto) {
    return 'This action adds a new recipe';
  }

  findAll() {
    return `This action returns all recipe`;
  }

  findOne(id: number) {
    return `This action returns a #${id} recipe`;
  }

  update(id: number, updateRecipeDto: UpdateRecipeDto) {
    return `This action updates a #${id} recipe`;
  }

  remove(id: number) {
    return `This action removes a #${id} recipe`;
  }
}
