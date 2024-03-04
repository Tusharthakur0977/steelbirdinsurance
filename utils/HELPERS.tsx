import {IForm} from '../src/typings/global';

const formatPlaceholderRegisterINsurance = (value: keyof IForm) => {
  switch (value) {
    case 'name':
      return 'Name';
    case 'fatherName':
      return "Father's name";
    case 'address':
      return 'Address';
    case 'email':
      return 'Email';
    case 'dateOfBirth':
      return 'Date of birth';
    case 'phoneNumber':
      return 'Phone number';
    case 'invoiceId':
      return 'invoice ID';
    case 'emergencyContactNumber':
      return 'Emergency contact number';
    case 'contactNumber2':
      return 'Contact number 2';
    case 'bloodGroup':
      return 'Blood group';
    default:
      break;
  }
};

export const isEmailValid = (email: string): boolean => {
  // eslint-disable-next-line no-useless-escape
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  return reg.test(email);
};

export {formatPlaceholderRegisterINsurance};
