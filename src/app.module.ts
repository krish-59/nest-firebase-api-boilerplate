import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { RecipeModule } from './recipe/recipe.module';
import { FirestoreModule } from './firestore/firestore.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    FirestoreModule.forRoot({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        keyFilename: configService.get<string>('FIREBASE_KEY_FILE_NAME'),
        projectId: configService.get<string>('FIREBASE_PROJECT_ID'),
      }),
      inject: [ConfigService],
    }),
    RecipeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
