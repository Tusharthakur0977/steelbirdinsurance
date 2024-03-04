import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {FC, useState} from 'react';
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
import AntIcons from 'react-native-vector-icons/AntDesign';
import COLORS from '../../../utils/COLORS';
import {formatPlaceholderRegisterINsurance} from '../../../utils/HELPERS';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';
import {HomeStackParams} from '../../typings/route';
import Styles from './styles';
import {IForm} from '../../typings/global';

type RegisterEmergencyContactProps = NativeStackScreenProps<
  HomeStackParams,
  'registerEmergencyContact'
>;

interface InputFieldProps {
  item: keyof IForm;
  formData: IForm;
  handleChange: (key: keyof IForm, value: string) => void;
  error?: string;
}
const InputField: FC<InputFieldProps> = React.memo(
  ({item, formData, handleChange, error}) => {
    return (
      <View style={Styles.inputBox}>
        <TextInput
          value={formData[item]}
          onChangeText={text => handleChange(item, text)}
          placeholder={formatPlaceholderRegisterINsurance(item)}
          style={Styles.inputField}
        />

        {error && <Text style={Styles.errorText}>{error}</Text>}
      </View>
    );
  },
);

const RegisterEmergencyContact: FC<RegisterEmergencyContactProps> = ({
  navigation,
}) => {
  const [formData, setFormData] = useState<IForm>({
    name: '',
    fatherName: '',
    emergencyContactNumber: '',
    contactNumber2: '',
    bloodGroup: '',
  });

  const [errors, setErrors] = useState<IForm>({
    name: '',
    fatherName: '',
    emergencyContactNumber: '',
    contactNumber2: '',
    bloodGroup: '',
  });

  const keyExtractor = (item: any, index: any) => item + index;
  const handleChange = (key: keyof IForm, value: string | number) => {
    setFormData(prevDetails => ({
      ...prevDetails,
      [key]: value,
    }));
  };

  const validateForm = () => {
    let valid = true;
    let newErrors = {
      name: '',
      fatherName: '',
      emergencyContactNumber: '',
      contactNumber2: '',
      bloodGroup: '',
    };

    if (!formData.name!.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    }

    if (!formData.emergencyContactNumber!.trim()) {
      newErrors.emergencyContactNumber = 'Emergency contact number is required';
      valid = false;
    }
    if (!formData.fatherName!.trim()) {
      newErrors.fatherName = 'Father Name is required';
      valid = false;
    }
    if (!formData.contactNumber2!.trim()) {
      newErrors.contactNumber2 = 'contact number 2 is required';
      valid = false;
    }
    if (!formData.bloodGroup!.trim()) {
      newErrors.bloodGroup = 'Blood group is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log(formData);
      navigation.navigate('emergencyDetails');
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
                  <Text style={Styles.headerText}>
                    Register Emergency Contact
                  </Text>
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
              error={errors[item as keyof IForm]}
            />
          )}
          keyExtractor={keyExtractor}
          contentContainerStyle={Styles.listCont}
        />
      </ScrollView>
      <PrimaryButton
        onPress={handleSubmit}
        title="Submit"
        titleStyle={Styles.btonText}
        buttonStyle={Styles.btnStyle}
      />
    </SafeAreaView>
  );
};

export default RegisterEmergencyContact;
