import {
  FORM_VIEW_MODE,
  FORM_EDIT_MODE,
  FORM_IDS,
  FORM_SANITIZATION_FUNCTION_IDS,
  FORM_SANITIZATOIN_FUNCTION_MAP
} from "@wrappid/core";

import { coreComponentsRegistry as CoreComponentsRegistry } from "./CoreComponentsRegistry";
import CoreAvatar from "./dataDisplay/CoreAvatar";
import CoreAvatarGroup from "./dataDisplay/CoreAvatarGroup";
import CoreBadge from "./dataDisplay/CoreBadge";
import CoreChip from "./dataDisplay/CoreChip";
import CoreDivider from "./dataDisplay/CoreDivider";
import CoreEmailLink from "./dataDisplay/CoreEmailLink";
import CoreEmailOrPhoneLink from "./dataDisplay/CoreEmailOrPhoneLink";
import CoreH from "./dataDisplay/CoreH";
import CoreH1 from "./dataDisplay/CoreH1";
import CoreH2 from "./dataDisplay/CoreH2";
import CoreH3 from "./dataDisplay/CoreH3";
import CoreH4 from "./dataDisplay/CoreH4";
import CoreH5 from "./dataDisplay/CoreH5";
import CoreH6 from "./dataDisplay/CoreH6";
import CoreIcon, { __IconTypes } from "./dataDisplay/CoreIcon";
import CoreIconText from "./dataDisplay/CoreIconText";
import CoreImage from "./dataDisplay/CoreImage";
import CoreLabel from "./dataDisplay/CoreLabel";
import CoreList from "./dataDisplay/CoreList";
import CoreListItem from "./dataDisplay/CoreListItem";
import CoreListItemAvatar from "./dataDisplay/CoreListItemAvatar";
import CoreListItemButton from "./dataDisplay/CoreListItemButton";
import CoreListItemIcon from "./dataDisplay/CoreListItemIcon";
import CoreListItemText from "./dataDisplay/CoreListItemText";
import CoreListSubheader from "./dataDisplay/CoreListSubheader";
import CoreMarkdownViewer from "./dataDisplay/CoreMarkdownViewer";
import CorePhoneLink from "./dataDisplay/CorePhoneLink";
import CoreTable from "./dataDisplay/CoreTable";
import CoreTableBody from "./dataDisplay/CoreTableBody";
import CoreTableBodyCell from "./dataDisplay/CoreTableBodyCell";
import CoreTableCell from "./dataDisplay/CoreTableCell";
import CoreTableContainer from "./dataDisplay/CoreTableContainer";
import CoreTableFooter from "./dataDisplay/CoreTableFooter";
import CoreTableHead from "./dataDisplay/CoreTableHead";
import CoreTableHeadCell from "./dataDisplay/CoreTableHeadCell";
import CoreTableHeadRow from "./dataDisplay/CoreTableHeadRow";
import CoreTablePagination from "./dataDisplay/CoreTablePagination";
import CoreTableRow from "./dataDisplay/CoreTableRow";
import CoreTableSortLabel from "./dataDisplay/CoreTableSortLabel";
import CoreTimer from "./dataDisplay/CoreTimer";
import CoreTooltip from "./dataDisplay/CoreTooltip";
import CoreTypography from "./dataDisplay/CoreTypography";
import CoreTypographyBody1 from "./dataDisplay/CoreTypographyBody1";
import CoreTypographyBody2 from "./dataDisplay/CoreTypographyBody2";
import CoreTypographyButton from "./dataDisplay/CoreTypographyButton";
import CoreTypographyCaption from "./dataDisplay/CoreTypographyCaption";
import CoreTypographyOverline from "./dataDisplay/CoreTypographyOverline";
import CoreTypographySubtitle1 from "./dataDisplay/CoreTypographySubtitle1";
import CoreTypographySubtitle2 from "./dataDisplay/CoreTypographySubtitle2";
import CoreDataTable from "./dataDisplay/dataTable/CoreDataTable";
import CoreFlatList from "./dataDisplay/dataTable/CoreFlatList";
import StatusText from "./dataDisplay/StatusText";
import UserChip from "./dataDisplay/UserChip";
import CoreAlert from "./feedback/CoreAlert";
import CoreAlertTitle from "./feedback/CoreAlertTitle";
import CoreBackdrop from "./feedback/CoreBackdrop";
import CoreCircularProgress from "./feedback/CoreCircularProgress";
import CoreDialog, { CORE_DIALOG_TYPES } from "./feedback/CoreDialog";
import CoreLinearProgress from "./feedback/CoreLinearProgress";
import CoreSkeleton from "./feedback/CoreSkeleton";
import CoreSnackbar from "./feedback/CoreSnackbar";
import ChildMap from "./inputs/ChildMap";
import CoreAsyncSelect from "./inputs/CoreAsyncSelect";
import CoreAutocomplete from "./inputs/CoreAutocomplete";
import CoreButton from "./inputs/CoreButton";
import CoreCheckbox from "./inputs/CoreCheckbox";
import CoreConfirmPasswordField from "./inputs/CoreConfirmPasswordField";
import CoreContainedButton from "./inputs/CoreContainedButton";
import CoreDatepicker from "./inputs/CoreDatepicker";
import CoreDateRangepicker from "./inputs/CoreDateRangepicker";
import CoreDateTimePicker from "./inputs/CoreDateTimePicker";
import CoreDateTimeRangePicker from "./inputs/CoreDateTimeRangePicker";
import CoreFab from "./inputs/CoreFab";
import CoreFilePicker from "./inputs/CoreFilePicker";
import CoreFormControl from "./inputs/CoreFormControl";
import CoreFormErrorText from "./inputs/CoreFormErrorText";
import CoreFormHelperText from "./inputs/CoreFormHelperText";
import CoreFormLabelCheckbox from "./inputs/CoreFormLabelCheckbox";
import CoreGoogleButton from "./inputs/CoreGoogleButton";
import CoreIconButton from "./inputs/CoreIconButton";
import CoreImagePicker from "./inputs/CoreImagePicker";
import CoreInput from "./inputs/CoreInput";
import CoreInputAdornment from "./inputs/CoreInputAdornment";
import CoreInputLabel from "./inputs/CoreInputLabel";
import CoreInputPassword from "./inputs/CoreInputPassword";
import CoreJSONEditor from "./inputs/CoreJSONEditor";
import CoreJSONInput from "./inputs/CoreJSONInput";
import CoreMedicineSelector from "./inputs/CoreMedicineSelector";
import CoreMultiTimeRangePicker from "./inputs/CoreMultiTimeRangePicker";
import CoreOtpInput from "./inputs/CoreOtpInput";
import CoreOutlinedButton from "./inputs/CoreOutlinedButton";
import CorePhone from "./inputs/CorePhone";
import CoreRating from "./inputs/CoreRating";
import CoreReactSelectInput from "./inputs/CoreReactSelectInput";
import CoreResponsiveButton from "./inputs/CoreResponsiveButton";
import CoreRichTextEditor from "./inputs/CoreRichTextEditor";
import CoreSelect from "./inputs/CoreSelect";
import CoreSpeechToText from "./inputs/CoreSpeechToText";
import CoreSwitch from "./inputs/CoreSwitch";
import CoreTextarea from "./inputs/CoreTextarea";
import CoreTextButton from "./inputs/CoreTextButton";
import CoreTextField from "./inputs/CoreTextField";
import CoreTimePicker from "./inputs/CoreTimePicker";
import CoreTimeRangePicker from "./inputs/CoreTimeRangePicker";
import CoreForm from "./inputs/forms/CoreForm";
import CoreFormControlLabel from "./inputs/forms/CoreFormControlLabel";
import CoreFormGroup from "./inputs/forms/CoreFormGroup";
import ParentChildMap from "./inputs/ParentChildMap";
import CoreBox from "./layouts/CoreBox";
import CoreContainer from "./layouts/CoreContainer";
import CoreGrid from "./layouts/CoreGrid";
import CoreImageBackground from "./layouts/CoreImageBackground";
import CoreSection from "./layouts/CoreSection";
import CoreSpan from "./layouts/CoreSpan";
import CoreStack from "./layouts/CoreStack";
import CoreCustomTabs from "./navigation/CoreCustomTabs";
import CoreLink from "./navigation/CoreLink";
import CoreMenu from "./navigation/CoreMenu";
import CoreMenuItem from "./navigation/CoreMenuItem";
import CoreMenuList from "./navigation/CoreMenuList";
import CoreScrollTop from "./navigation/CoreScrollTop";
import CoreTab from "./navigation/CoreTab";
import CoreTabHead from "./navigation/CoreTabHead";
import CoreTabPanel from "./navigation/CoreTabPanel";
import CoreTabs from "./navigation/CoreTabs";
import CoreTOC from "./navigation/CoreTOC";
import CoreAccordion from "./surfaces/CoreAccordion";
import CoreAccordionDetail from "./surfaces/CoreAccordionDetail";
import CoreAccordionSummary from "./surfaces/CoreAccordionSummary";
import CoreAppBar from "./surfaces/CoreAppBar";
import CoreCard from "./surfaces/CoreCard";
import CoreCardActionArea from "./surfaces/CoreCardActionArea";
import CoreCardActions from "./surfaces/CoreCardActions";
import CoreCardContent from "./surfaces/CoreCardContent";
import CoreCardHeader from "./surfaces/CoreCardHeader";
import CoreCardMedia from "./surfaces/CoreCardMedia";
import CoreCollapse from "./surfaces/CoreCollapse";
import CoreDrawer from "./surfaces/CoreDrawer";
import CoreFooter from "./surfaces/CoreFooter";
import CorePaper from "./surfaces/CorePaper";
import CoreRightDrawer from "./surfaces/CoreRightDrawer";
import CoreToolbar from "./surfaces/CoreToolbar";
import CoreApiVersion from "./utils/CoreApiVersion";
import CoreFade from "./utils/CoreFade";
import CoreLoginDetails from "./utils/CoreLoginDetails";
import CoreModal from "./utils/CoreModal";
import CorePopover from "./utils/CorePopover";
import CoreProfilePopOver from "./utils/CoreProfilePopOver";

export {
  CoreCardMedia,
  CoreTOC,
  CoreTypography,
  CoreMarkdownViewer,
  CoreCollapse,
  CoreListItemAvatar,
  CoreListSubheader,
  CoreFormControlLabel,
  CoreComponentsRegistry,
  CoreIconText,
  CoreFormGroup,
  CoreApiVersion,
  CoreLoginDetails,
  CoreProfilePopOver,
  CoreDialog,
  CoreGoogleButton,
  __IconTypes,
  // route
  // CoreAppDiv,
  CoreBox,
  CoreContainer,
  CoreGrid,
  // CoreGridItem,
  CoreList,
  CoreListItem,
  CoreSection,
  CoreSpan,
  CoreStack,
  CoreImageBackground,
  CoreLink,
  CoreMenuItem,
  CoreMenuList,
  CoreScrollTop,
  CoreTab,
  CoreTabPanel,
  CoreTabs,
  CoreCustomTabs,
  CoreTabHead,
  // CoreNavigation,
  CoreFade,
  CoreModal,
  CorePopover,
  CoreToolbar,
  CoreForm,
  CoreAccordion,
  CoreAccordionDetail,
  CoreAccordionSummary,
  CoreAppBar,
  CoreCard,
  CoreCardActionArea,
  CoreCardActions,
  CoreCardContent,
  CoreCardHeader,
  CoreDrawer,
  CorePaper,
  CoreRightDrawer,
  CoreAsyncSelect,
  CoreAutocomplete,
  CoreButton,
  CoreCheckbox,
  CoreConfirmPasswordField,
  CoreContainedButton,
  CoreDatepicker,
  CoreDateRangepicker,
  CoreDateTimePicker,
  CoreDateTimeRangePicker,
  CoreFab,
  CoreFilePicker,
  CoreFormControl,
  CoreFormErrorText,
  CoreFormHelperText,
  CoreIconButton,
  CoreImagePicker,
  CoreInput,
  CoreInputAdornment,
  CoreInputLabel,
  CoreInputPassword,
  CoreJSONInput,
  CoreJSONEditor,
  CoreMenu,
  CoreMultiTimeRangePicker,
  CoreOtpInput,
  CoreOutlinedButton,
  CorePhone,
  CoreSelect,
  CoreSwitch,
  CoreTextarea,
  CoreTextButton,
  CoreTextField,
  CoreTimePicker,
  CoreTimeRangePicker,
  CoreListItemButton,
  ChildMap,
  CoreFormLabelCheckbox,
  CoreResponsiveButton,
  CoreRichTextEditor,
  ParentChildMap,
  CoreSpeechToText,
  CoreAlert,
  CoreAlertTitle,
  CoreBackdrop,
  CoreCircularProgress,
  CoreLinearProgress,
  CoreSkeleton,
  CoreSnackbar,
  CoreDataTable,
  CoreAvatar,
  CoreAvatarGroup,
  CoreBadge,
  CoreChip,
  CoreDivider,
  CoreIcon,
  CoreImage,
  CoreListItemIcon,
  CoreListItemText,
  CoreTable,
  CoreTableBody,
  CoreTableBodyCell,
  CoreTableCell,
  CoreTableContainer,
  CoreTableFooter,
  CoreTableHead,
  CoreTableHeadRow,
  CoreTableHeadCell,
  CoreTablePagination,
  CoreTableRow,
  CoreTableSortLabel,
  CoreTooltip,
  CoreLabel,
  CoreTypographyBody1,
  CoreTypographyBody2,
  CoreTypographyButton,
  CoreTypographyCaption,
  CoreTypographyOverline,
  CoreTypographySubtitle1,
  CoreTypographySubtitle2,
  CoreH,
  CoreH1,
  CoreH2,
  CoreH3,
  CoreH4,
  CoreH5,
  CoreH6,
  StatusText,
  UserChip,
  CoreMedicineSelector,
  CoreReactSelectInput,
  FORM_VIEW_MODE,
  FORM_EDIT_MODE,
  FORM_IDS,
  FORM_SANITIZATION_FUNCTION_IDS,
  FORM_SANITIZATOIN_FUNCTION_MAP,
  CoreFlatList,
  CorePhoneLink,
  CoreEmailLink,
  CoreEmailOrPhoneLink,
  CoreTimer,
  CORE_DIALOG_TYPES,
  CoreRating,
  CoreFooter
};
