import React from 'react';
import { Moment } from 'moment';

interface FormattedMessageProps {
  id: string;
  children?: (value: string) => React.ReactElement<any>;
  options?: any;
}

interface FormattedDictionaryProps {
  children: (value: any) => React.ReactElement<any>;
  options?: any;
  [props: string]: any;
}

interface FormattedDateTimeProps {
  format?: String;
  value: Number | String | Moment;
}

interface FormattedRelativeTimeProps {
  value: Number | String | Moment;
}

export function FormattedMessage(
  props: FormattedMessageProps
): React.ReactElement<any>;
export function FormattedDate(
  props: FormattedDateTimeProps
): React.ReactElement<any>;
export function FormattedTime(
  props: FormattedDateTimeProps
): React.ReactElement<any>;
export function FormattedDictionary(
  props: FormattedDictionaryProps
): React.ReactElement<any>;
export function FormattedRelativeTime(
  props: FormattedRelativeTimeProps
): React.ReactElement<any>;
export function configureI18n(args: any): any;
