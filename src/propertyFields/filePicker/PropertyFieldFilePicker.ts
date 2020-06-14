import * as React from 'react';
import * as ReactDom from 'react-dom';

import {
  IPropertyPaneField,
  PropertyPaneFieldType,
  WebPartContext
} from '@microsoft/sp-webpart-base';

import PropertyPaneFilePickerHost from './PropertyFieldFilePickerHost';

import { IFilePickerResult } from './filePickerControls';
import { IPropertyFieldFilePickerHostProps } from './IPropertyFieldFilePickerHost';
import { IPropertyFieldFilePickerPropsInternal, IPropertyFieldFilePickerProps } from './IPropertyFieldFilePicker';

class PropertyFieldFilePickerBuilder implements IPropertyPaneField<IPropertyFieldFilePickerPropsInternal> {
  // Properties defined by IPropertyPaneField
  public type: PropertyPaneFieldType = PropertyPaneFieldType.Custom;
  public targetProperty: string;
  public properties: IPropertyFieldFilePickerPropsInternal;

  // Custom properties label: string;  

  private itemsCountQueryLimit: number;

  private hideWebSearchTab: boolean;
  private hideRecentTab: boolean;
  private hideSiteFilesTab: boolean;
  private hideLocalUploadTab: boolean;
  private hideLinkUploadTab: boolean;
  private hideOrganisationalAssetTab: boolean;
  private hideOneDriveTab: boolean;
  
  private customProperties: any;
  private key: string;
  private disabled: boolean = false;
  private required: boolean = false;
  private storeLastActiveTab: boolean = true;
  private context: WebPartContext;
  private label?: string;
  private buttonLabel?: string;
  private buttonIcon?: string;
  private onSave: (filePickerResult: IFilePickerResult) => void;
  private onChanged?: (filePickerResult: IFilePickerResult) => void;
  private buttonClassName?: string;
  private panelClassName?: string;
  private accepts?: string[];
  private filePickerResult: IFilePickerResult;
  private bingAPIKey: string;

  private _onChangeCallback: (targetProperty?: string, newValue?: any) => void;
  /**
   * Constructor method
   */
  public constructor(_targetProperty: string, _properties: IPropertyFieldFilePickerPropsInternal) {

    this.targetProperty = _targetProperty;
    this.properties = _properties;
    this.properties.onDispose = this.dispose;
    this.properties.onRender = this.render;

    this.label = _properties.label;
    this.buttonLabel = _properties.buttonLabel;
    this.context = _properties.context;
    this.buttonIcon = _properties.buttonIcon;
    this.buttonClassName = _properties.buttonClassName;
    this.panelClassName = _properties.panelClassName;
    this.accepts = _properties.accepts;
    this.filePickerResult = _properties.filePickerResult;
    this.required = _properties.required;
    this.bingAPIKey = _properties.bingAPIKey;


    this.onSave = _properties.onSave;
    this.onChanged = _properties.onChanged;

    this.itemsCountQueryLimit = _properties.itemsCountQueryLimit !== undefined ? _properties.itemsCountQueryLimit : 100;

    this.hideWebSearchTab = _properties.hideWebSearchTab !== undefined ? _properties.hideWebSearchTab : true;
    this.hideRecentTab = _properties.hideRecentTab !== undefined ? _properties.hideRecentTab : false;
    this.hideSiteFilesTab = _properties.hideSiteFilesTab !== undefined ? _properties.hideSiteFilesTab : false;
    this.hideLocalUploadTab = _properties.hideLocalUploadTab !== undefined ? _properties.hideLocalUploadTab : false;
    this.hideLinkUploadTab = _properties.hideLinkUploadTab !== undefined ? _properties.hideLinkUploadTab : false;
    this.hideOrganisationalAssetTab = _properties.hideOrganisationalAssetTab !== undefined ? _properties.hideOrganisationalAssetTab : false;
    this.hideOneDriveTab = _properties.hideOneDriveTab !== undefined ? _properties.hideOneDriveTab : false;
    this.storeLastActiveTab = _properties.storeLastActiveTab !== undefined ? _properties.storeLastActiveTab : true;
    this.onPropertyChange = _properties.onPropertyChange;
    this.customProperties = _properties.properties;
    this.key = _properties.key;
    
    this.context = _properties.context;

    if (_properties.disabled === true) {
      this.disabled = _properties.disabled;
    }

  }
  
  private render = (elem: HTMLElement, ctx?: any, changeCallback?: (targetProperty?: string, newValue?: any) => void): void => {

    const element: React.ReactElement<IPropertyFieldFilePickerHostProps> = React.createElement(PropertyPaneFilePickerHost, {

      label: this.label,
      buttonLabel: this.buttonLabel,
      context: this.context,
      buttonIcon: this.buttonIcon,
      buttonClassName: this.buttonClassName,
      panelClassName: this.panelClassName,
      required: this.required,
      bingAPIKey: this.bingAPIKey,

      onSave: this.onSave,
      onChanged: this.onChanged,
      itemsCountQueryLimit: this.itemsCountQueryLimit,
      accepts: this.accepts,
      filePickerResult: this.filePickerResult,

      hideWebSearchTab: this.hideWebSearchTab,
      hideRecentTab: this.hideRecentTab,
      hideSiteFilesTab: this.hideSiteFilesTab,
      hideLocalUploadTab: this.hideLocalUploadTab,
      hideLinkUploadTab: this.hideLinkUploadTab,
      hideOrganisationalAssetTab: this.hideOrganisationalAssetTab,
      hideOneDriveTab: this.hideOneDriveTab,
      storeLastActiveTab: this.storeLastActiveTab,

      targetProperty: this.targetProperty,

      properties: this.customProperties,
      key: this.key,
      disabled: this.disabled,

      onDispose: this.dispose,
      onRender: this.render,
      onChange: changeCallback,
      onPropertyChange: this.onPropertyChange
    });
    
    ReactDom.render(element, elem);
    
  }
  
  private dispose(elem: HTMLElement): void {    
  }
  
  public onPropertyChange(propertyPath: string, oldValue: any, newValue: any): void {    
  }  

}

export function PropertyFieldFilePicker(targetProperty: string, properties: IPropertyFieldFilePickerProps): IPropertyPaneField<IPropertyFieldFilePickerPropsInternal> {
  
  return new PropertyFieldFilePickerBuilder(targetProperty, {
    ...properties,
    targetProperty: targetProperty,
    onRender: null,
    onDispose: null,    
  });
}