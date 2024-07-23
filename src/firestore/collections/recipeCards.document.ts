import { Timestamp } from '@google-cloud/firestore';

export class RecipeCardDocument {
  static collectionName = 'recipeCards';
  title: string;
  tags: string[];
  createdAt: Timestamp;
  updatedAt: Timestamp;
}
