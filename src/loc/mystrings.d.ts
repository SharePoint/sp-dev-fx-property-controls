declare interface IPropertyControlStrings {

  DescriptionLabel: string;
  MoreInfoLabel: string;

  // PeoplePicker labels
  PeoplePickerSuggestedContacts: string;
  PeoplePickerSuggestedGroups: string;
  PeoplePickerSuggestedCombined: string;
  PeoplePickerNoResults: string;
  PeoplePickerLoading: string;

  // DatePicker labels
  DatePickerMonthLongJanuary: string;
  DatePickerMonthShortJanuary: string;
  DatePickerMonthLongFebruary: string;
  DatePickerMonthShortFebruary: string;
  DatePickerMonthLongMarch: string;
  DatePickerMonthShortMarch: string;
  DatePickerMonthLongApril: string;
  DatePickerMonthShortApril: string;
  DatePickerMonthLongMay: string;
  DatePickerMonthShortMay: string;
  DatePickerMonthLongJune: string;
  DatePickerMonthShortJune: string;
  DatePickerMonthLongJuly: string;
  DatePickerMonthShortJuly: string;
  DatePickerMonthLongAugust: string;
  DatePickerMonthShortAugust: string;
  DatePickerMonthLongSeptember: string;
  DatePickerMonthShortSeptember: string;
  DatePickerMonthLongOctober: string;
  DatePickerMonthShortOctober: string;
  DatePickerMonthLongNovember: string;
  DatePickerMonthShortNovember: string;
  DatePickerMonthLongDecember: string;
  DatePickerMonthShortDecember: string;
  DatePickerDayLongSunday: string;
  DatePickerDayShortSunday: string;
  DatePickerDayLongMonday: string;
  DatePickerDayShortMonday: string;
  DatePickerDayLongTuesday: string;
  DatePickerDayShortTuesday: string;
  DatePickerDayLongWednesday: string;
  DatePickerDayShortWednesday: string;
  DatePickerDayLongThursday: string;
  DatePickerDayShortThursday: string;
  DatePickerDayLongFriday: string;
  DatePickerDayShortFriday: string;
  DatePickerDayLongSaturday: string;
  DatePickerDayShortSaturday: string;

  DatepickerGoToToday: string;
  DateTimePickerDate: string;
  DateTimePickerTime: string;

  // ColorPicker Labels
  ColorPickerButtonTitle: string;

  // Code field labels
  SaveButtonLabel: string;
  CancelButtonLabel: string;

  // Number field validation messages
  NotNumberValidationMessage: string;
  MinimumNumberValidationMessage: string;
  MaximumNumberValidationMessage: string;

  // TermPicker
  TermPickerNoTerms: string;
  TermPickerExpandTitle: string;
  TermPickerExpandNode: string;
  TermPickerMenuTermSet: string;
  TermPickerMenuGroup: string;
  TermPickerInLabel: string;
  TermPickerTermSetLabel: string;

  // Multi-select field
  propertyFieldMultiSelectNoOptions: string;

  // Collection data
  CollectionDataEmptyFields: string;
  CollectionDataEmptyValue: string;
  CollectionAddRowButtonLabel: string;
  CollectionDeleteRowButtonLabel: string;
  CollectionSaveAndAddButtonLabel: string;
  CollectionDataItemShowErrorsLabel: string;
  CollectionDataItemFieldRequiredLabel: string;
  InvalidUrlError: string;

  // Property Editor
  ApplyButtonLabel: string;
  ImportButtonLabel: string;
  ExportButtonLabel: string;
  JsonFileRequiredMessage: string;

  // Site Picker labels
  SitePickerSearchBoxPlaceholder: string;
  SitePickerNoResults: string;
  SitePickerSitesChosen: string;

    // Team Picker labels
    TeamPickerSearchBoxPlaceholder: string;
    TeamPickerNoResults: string;
    TeamPickerSitesChosen: string;
}

declare module 'PropertyControlStrings' {
  const strings: IPropertyControlStrings;
  export = strings;
}
