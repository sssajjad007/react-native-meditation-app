export interface ILesson {
  objectId: string;
  title: string;
  type: string;
  url: string;
  posterURL: string;
}

export interface IMeditation {
  objectId: string;
  title: string;
  type: string;
  url: string;
}
export interface IFetchGetLesson {
  error: string;
  lessons: ILesson[];
}
export interface IFetchGetCourseById {
  error: string;
  poster: string;
  course: string;
  courseId: string;
}
