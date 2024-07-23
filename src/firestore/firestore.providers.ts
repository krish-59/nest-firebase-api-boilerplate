import { RecipeCardDocument } from './collections/recipeCards.document';

export const FirestoreDatabaseProvider = 'firestoredb';
export const FirestoreOptionsProvider = 'firestoreOptions';
export const FirestoreCollectionProviders: string[] = [
  RecipeCardDocument.collectionName,
  //   additional collection providers
];
