import { StyleSheet } from 'react-native';
import { useField } from 'formik';
import TextInput from './TextInput';
import Text from './Text';
import Theme from '../theme';

const styles = StyleSheet.create({
  errorText: {
    marginTop: 5,
  },
  inputField: {
    padding: 8,
    paddingLeft: 16,
    margin: 8,
    borderWidth: 1,
    borderColor: Theme.colors.inputBorder,
    borderRadius: 4,
  },
});

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  return (
    <>
      <TextInput
        onChangeText={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        style={styles.inputField}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};

export default FormikTextInput;
