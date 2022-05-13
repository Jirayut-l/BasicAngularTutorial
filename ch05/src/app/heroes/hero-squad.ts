import {HeroFavoriteService} from './hero-favorite.service';
import {HeroService} from './hero.service';

export const heroSquadFactory = (isFavorite: boolean) => {
  return () => {
    if (isFavorite) {
      return new HeroFavoriteService();
    }
    return new HeroService();
  };
};
