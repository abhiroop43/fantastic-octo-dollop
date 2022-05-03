export interface ICandidate {
  _id: string;
  name: string;
  email: string;
  cv_received_date: string;
  availability_in: number;
  active: boolean;
  created_on: Date;
  created_by: string;
  updated_on: Date;
  updated_by: string;
}
