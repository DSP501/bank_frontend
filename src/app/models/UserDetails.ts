export interface UserDetails {
  user_ref_id: number;
  title: string;
  fname: string;
  mname: string;
  lname: string;
  father_name: string;

  mobile_no: string;
  email: string;

  aadhar_no: string;
  pancard: string;
  dob: Date;

  occupation_type: string;
  source_of_income: string;
  gross_income: number;

  add_line_1: string;
  add_line_2: string;
  landmark: string;
  state: string;
  city: string;
  pincode: string;

  p_add_line_1: string;
  p_add_line_2: string;
  p_landmark: string;
  p_state: string;
  p_city: string;
  p_pincode: string;

  reg_date: Date;

  isapproved: boolean;
  has_debit_card: boolean;
  net_banking_active: boolean;
  addr_same: boolean;
}
