import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {Dispatch, FC, SetStateAction, useState} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import AntIcons from 'react-native-vector-icons/AntDesign';
import COLORS from '../../../utils/COLORS';
import {
  formatPlaceholderRegisterINsurance,
  isEmailValid,
} from '../../../utils/HELPERS';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';
import {IForm} from '../../typings/global';
import {HomeStackParams} from '../../typings/route';
import Styles from './styles';

type RegisterInsuranceProps = NativeStackScreenProps<
  HomeStackParams,
  'registerInsurance'
>;

interface InputFieldProps {
  item: keyof IForm;
  formData: IForm;
  handleChange: (key: keyof IForm, value: string | Date) => void;
  error?: string;
  open?: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}
const InputField: FC<InputFieldProps> = React.memo(
  ({item, formData, handleChange, error, open, setOpen}) => {
    return (
      <View style={Styles.inputBox}>
        <TextInput
          value={formData[item] as string}
          onChangeText={text => handleChange(item, text)}
          placeholder={formatPlaceholderRegisterINsurance(item)}
          style={[
            Styles.inputField,
            {
              width:
                item === 'dateOfBirth'
                  ? widthPercentageToDP(80)
                  : widthPercentageToDP(90),
            },
          ]}
          editable={item !== 'dateOfBirth'}
        />
        {item === 'dateOfBirth' && (
          <TouchableOpacity onPress={() => setOpen(!open)}>
            <AntIcons name="calendar" size={30} color={COLORS.White} />
          </TouchableOpacity>
        )}
        {error && <Text style={Styles.errorText}>{error}</Text>}
      </View>
    );
  },
);

const RegisterInsurance: FC<RegisterInsuranceProps> = ({navigation}) => {
  const [formData, setFormData] = useState<IForm>({
    name: '',
    fatherName: '',
    address: '',
    email: '',
    phoneNumber: '',
    dateOfBirth: new Date().toUTCString(),
    invoiceId: '',
  });

  const [open, setOpen] = useState(false);

  const [purchasedFrom, setPurchasedFrom] = useState('');

  const [errors, setErrors] = useState<IForm>({
    name: '',
    fatherName: '',
    address: '',
    email: '',
    phoneNumber: '',
    dateOfBirth: '',
    invoiceId: '',
  });

  const keyExtractor = (item: any, index: any) => item + index;
  const handleChange = (key: keyof IForm, value: string | number | Date) => {
    setFormData(prevFormData => ({
      ...prevFormData,
      [key]:
        typeof value === 'string'
          ? value
          : typeof value === 'number'
          ? value
          : value?.toISOString(),
    }));
  };

  const validateForm = () => {
    let valid = true;
    let newErrors = {
      name: '',
      fatherName: '',
      address: '',
      email: '',
      phoneNumber: '',
      dateOfBirth: '',
      invoiceId: '',
    };

    if (!formData.name!.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    }

    if (!formData.fatherName!.trim()) {
      newErrors.fatherName = 'Father Name is required';
      valid = false;
    }
    if (!formData.address!.trim()) {
      newErrors.address = 'Address is required';
      valid = false;
    }
    if (!formData.email!.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    }
    if (!isEmailValid(formData.email!)) {
      newErrors.email = 'Please entere a valid Email';
      valid = false;
    }
    if (!formData.phoneNumber!.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
      valid = false;
    }
    if (!formData.dateOfBirth?.toLocaleString().trim()) {
      newErrors.dateOfBirth = 'Date of birth is required';
      valid = false;
    }
    if (!formData.invoiceId!.trim()) {
      newErrors.invoiceId = 'Invoice number is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = () => {
    console.log(formData);
    if (validateForm()) {
    }
  };

  return (
    <SafeAreaView style={Styles.saferAreCont}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={Styles.scrollCont}>
        <FlatList
          ListHeaderComponent={
            <>
              {navigation.canGoBack() && (
                <View style={Styles.headerCont}>
                  <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    activeOpacity={0.7}>
                    <AntIcons
                      name="arrowleft"
                      size={20}
                      style={{color: COLORS.White}}
                    />
                  </TouchableOpacity>
                  <Text style={Styles.headerText}>Register for Insurance</Text>
                </View>
              )}
              <Image
                source={require('../../assets/images/logo.png')}
                style={Styles.logo}
              />
            </>
          }
          data={Object.keys(formData)}
          renderItem={({item}) => (
            <InputField
              item={item as keyof IForm}
              formData={formData}
              handleChange={handleChange}
              error={errors[item as keyof IForm] as string}
              open={open}
              setOpen={setOpen}
            />
          )}
          keyExtractor={keyExtractor}
          contentContainerStyle={Styles.listCont}
          ListFooterComponent={
            <>
              <View style={Styles.browseFieldCont}>
                <Text style={Styles.browseFieldLabel}>Invoice Attachement</Text>
                <PrimaryButton
                  title="Browse File"
                  titleStyle={Styles.browsebtonText}
                  buttonStyle={Styles.browseStyle}
                />
              </View>
              <View style={Styles.purchasedFromCont}>
                <TextInput
                  onChangeText={txt => setPurchasedFrom(txt)}
                  value={purchasedFrom}
                  placeholder="Purchased from"
                  style={Styles.inputField}
                />
                <View style={Styles.purchasedFromTextCont}>
                  <Text style={Styles.purchasedFromText}>
                    amazon/flipKart/offline/yooshopper/steelbirdhelmet/others
                  </Text>
                </View>
              </View>
            </>
          }
          nestedScrollEnabled
        />
      </ScrollView>
      <PrimaryButton
        onPress={handleSubmit}
        title="Submit"
        titleStyle={Styles.btonText}
        buttonStyle={Styles.btnStyle}
      />
      <DatePicker
        mode="date"
        title="Select Date of birth"
        modal
        open={open}
        date={new Date(formData.dateOfBirth!)}
        onConfirm={pickerDate => {
          setOpen(false);
          setFormData({
            ...formData,
            dateOfBirth: pickerDate.toUTCString(),
          });
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </SafeAreaView>
  );
};

export default RegisterInsurance;
