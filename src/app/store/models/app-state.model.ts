import { CourseItem } from './courseItem.model';

export interface AppState {
  readonly course: Array<CourseItem>;
}
