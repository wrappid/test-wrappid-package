import { defaultValidations } from "../../../core/package/utils/componentDefaultValidations";
import CoreAvatar from "../dataDisplay/CoreAvatar";
import CoreDivider from "../dataDisplay/CoreDivider";
import CoreEmailOrPhoneLink from "../dataDisplay/CoreEmailOrPhoneLink";
import CoreTypographyBody1 from "../dataDisplay/CoreTypographyBody1";
import CoreDataTable from "../dataDisplay/dataTable/CoreDataTable";
import CoreAsyncSelect from "../inputs/CoreAsyncSelect";
import CoreCheckbox from "../inputs/CoreCheckbox";
import CoreConfirmPassword from "../inputs/CoreConfirmPassword";
import CoreContainedButton from "../inputs/CoreContainedButton";
import CoreDatePicker from "../inputs/CoreDatepicker";
import CoreDateRangepicker from "../inputs/CoreDateRangepicker";
import CoreDateTimePicker from "../inputs/CoreDateTimePicker";
import CoreDateTimeRangePicker from "../inputs/CoreDateTimeRangePicker";
import CoreFilePicker from "../inputs/CoreFilePicker";
import CoreFormLabelCheckbox from "../inputs/CoreFormLabelCheckbox";
import CoreImagePicker from "../inputs/CoreImagePicker";
import CoreInput from "../inputs/CoreInput";
import CoreInputPassword from "../inputs/CoreInputPassword";
import CoreJSONInput from "../inputs/CoreJSONInput";
import CoreMultiTimeRangePicker from "../inputs/CoreMultiTimeRangePicker";
import CoreOtpInput from "../inputs/CoreOtpInput";
import CoreOutlinedButton from "../inputs/CoreOutlinedButton";
import CorePhone from "../inputs/CorePhone";
import CoreRichTextEditor from "../inputs/CoreRichTextEditor";
import CoreSelect from "../inputs/CoreSelect";
import CoreTextarea from "../inputs/CoreTextarea";
import CoreTextButton from "../inputs/CoreTextButton";
import CoreTimePicker from "../inputs/CoreTimePicker";
import CoreTimeRangePicker from "../inputs/CoreTimeRangePicker";
import CoreSpecificForm from "../inputs/forms/CoreSpecificForm";
import ParentChildMap from "../inputs/ParentChildMap";
import CoreSpan from "../layouts/CoreSpan";

/**
 * com key will have component reference, defaultValidation will have object 
 * with two key required and notRequired both of them having 
 * yup validation object for requires and not required field respectively */
export const componentMap = {
  CoreEmailOrPhoneLink: { comp: CoreEmailOrPhoneLink },
  CoreSpecificForm    : { comp: CoreSpecificForm },
  asyncSelect         : {
    comp             : CoreAsyncSelect,
    defaultValidation: defaultValidations.asyncSelect,
  },
  avatar: {
    comp    : CoreAvatar,
    onlyView: true,
  },
  checkbox: {
    comp             : CoreCheckbox,
    defaultValidation: defaultValidations.checkbox,
  },
  confirmPassword: {
    comp             : CoreConfirmPassword,
    defaultValidation: defaultValidations.confirmPassword,
  },
  coreBody1: {
    /**
     * @todo this one should be removed ASAP
     * instead coreTypographyBody1 should be used
     */
    comp    : CoreTypographyBody1,
    onlyView: true,
  },
  coreContainedButton: { comp: CoreContainedButton },
  coreOutlinedButton : { comp: CoreOutlinedButton },
  coreTextButton     : { comp: CoreTextButton },
  coreTypographyBody1: {
    comp    : CoreTypographyBody1,
    onlyView: true,
  },
  /**
   * Data table
   */
  dataTable: { comp: CoreDataTable },
  
  date: {
    comp             : CoreDatePicker,
    defaultValidation: defaultValidations.date,
  },
  
  dateRange: { comp: CoreDateRangepicker },
  
  dateTime: {
    comp             : CoreDateTimePicker,
    defaultValidation: defaultValidations.datetime,
  },
  
  dateTimeRange: { comp: CoreDateTimeRangePicker },
  
  divider: { comp: CoreDivider },
  
  email: {
    comp             : CoreInput,
    defaultValidation: defaultValidations.email,
  },
  
  emailOrPhone: {
    comp             : CoreInput,
    defaultValidation: defaultValidations.emailOrPhone,
  },
  
  file: {
    comp             : CoreFilePicker,
    defaultValidation: defaultValidations.filePicker,
  },
  
  formLabelCheckbox: {
    comp             : CoreFormLabelCheckbox,
    defaultValidation: defaultValidations.checkbox,
  },
  
  imagePicker: {
    comp             : CoreImagePicker,
    defaultValidation: defaultValidations.imagePicker,
  },
  
  json: {
    comp: CoreJSONInput,
    // -- defaultValidation: defaultValidations.json,
  },
  
  multiTimeRange: {
    comp             : CoreMultiTimeRangePicker,
    defaultValidation: defaultValidations.asyncSelect,
  },
  
  newPassword: {
    comp             : CoreInputPassword,
    defaultValidation: defaultValidations.password,
  },
  
  otp: {
    comp             : CoreOtpInput,
    defaultValidation: defaultValidations.otp,
  },
  
  parentChildMap: {
    comp             : ParentChildMap,
    defaultValidation: defaultValidations.parentChildMap,
  },

  password: {
    comp             : CoreInputPassword,
    defaultValidation: defaultValidations.password,
  },

  phone: {
    comp             : CorePhone,
    defaultValidation: defaultValidations.phone,
  },
  
  richTextEditor: { comp: CoreRichTextEditor },

  select: {
    comp             : CoreSelect,
    defaultValidation: defaultValidations.select,
  },
  
  spacer: { comp: CoreSpan },
  
  text: {
    comp             : CoreInput,
    defaultValidation: defaultValidations.text,
  },
  
  textarea: { comp: CoreTextarea },
  
  time: {
    comp             : CoreTimePicker,
    defaultValidation: defaultValidations.time,
  },

  timeRange: {
    comp             : CoreTimeRangePicker,
    defaultValidation: defaultValidations.asyncSelect,
  },
};
