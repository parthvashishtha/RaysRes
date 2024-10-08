import type { FromSchema } from 'json-schema-to-ts';
import * as schemas from './schemas';
export type GetApiV1ChatbotsResponse200 = FromSchema<typeof schemas.GetApiV1Chatbots.response['200']>;
export type GetApiV1GetcontactsMetadataParam = FromSchema<typeof schemas.GetApiV1Getcontacts.metadata>;
export type GetApiV1GetmediaMetadataParam = FromSchema<typeof schemas.GetApiV1Getmedia.metadata>;
export type GetApiV1GetmessagesWhatsappnumberMetadataParam = FromSchema<typeof schemas.GetApiV1GetmessagesWhatsappnumber.metadata>;
export type GetApiV1GetmessagetemplatesMetadataParam = FromSchema<typeof schemas.GetApiV1Getmessagetemplates.metadata>;
export type GetApiV1OrderDetailsReferenceidMetadataParam = FromSchema<typeof schemas.GetApiV1OrderDetailsReferenceid.metadata>;
export type GetApiV1PaymentStatusReferenceidMetadataParam = FromSchema<typeof schemas.GetApiV1PaymentStatusReferenceid.metadata>;
export type PostApiV1AddcontactWhatsappnumberBodyParam = FromSchema<typeof schemas.PostApiV1AddcontactWhatsappnumber.body>;
export type PostApiV1AddcontactWhatsappnumberMetadataParam = FromSchema<typeof schemas.PostApiV1AddcontactWhatsappnumber.metadata>;
export type PostApiV1AssignoperatorMetadataParam = FromSchema<typeof schemas.PostApiV1Assignoperator.metadata>;
export type PostApiV1ChatbotsStartMetadataParam = FromSchema<typeof schemas.PostApiV1ChatbotsStart.metadata>;
export type PostApiV1ChatbotsStartResponse200 = FromSchema<typeof schemas.PostApiV1ChatbotsStart.response['200']>;
export type PostApiV1RotatetokenMetadataParam = FromSchema<typeof schemas.PostApiV1Rotatetoken.metadata>;
export type PostApiV1SendinteractivebuttonsmessageBodyParam = FromSchema<typeof schemas.PostApiV1Sendinteractivebuttonsmessage.body>;
export type PostApiV1SendinteractivebuttonsmessageMetadataParam = FromSchema<typeof schemas.PostApiV1Sendinteractivebuttonsmessage.metadata>;
export type PostApiV1SendinteractivelistmessageBodyParam = FromSchema<typeof schemas.PostApiV1Sendinteractivelistmessage.body>;
export type PostApiV1SendinteractivelistmessageMetadataParam = FromSchema<typeof schemas.PostApiV1Sendinteractivelistmessage.metadata>;
export type PostApiV1SendsessionfileWhatsappnumberBodyParam = FromSchema<typeof schemas.PostApiV1SendsessionfileWhatsappnumber.body>;
export type PostApiV1SendsessionfileWhatsappnumberMetadataParam = FromSchema<typeof schemas.PostApiV1SendsessionfileWhatsappnumber.metadata>;
export type PostApiV1SendsessionmessageWhatsappnumberMetadataParam = FromSchema<typeof schemas.PostApiV1SendsessionmessageWhatsappnumber.metadata>;
export type PostApiV1SendtemplatemessageBodyParam = FromSchema<typeof schemas.PostApiV1Sendtemplatemessage.body>;
export type PostApiV1SendtemplatemessageMetadataParam = FromSchema<typeof schemas.PostApiV1Sendtemplatemessage.metadata>;
export type PostApiV1SendtemplatemessagecsvBodyParam = FromSchema<typeof schemas.PostApiV1Sendtemplatemessagecsv.body>;
export type PostApiV1SendtemplatemessagecsvMetadataParam = FromSchema<typeof schemas.PostApiV1Sendtemplatemessagecsv.metadata>;
export type PostApiV1SendtemplatemessagesBodyParam = FromSchema<typeof schemas.PostApiV1Sendtemplatemessages.body>;
export type PostApiV1UpdatechatstatusBodyParam = FromSchema<typeof schemas.PostApiV1Updatechatstatus.body>;
export type PostApiV1UpdatecontactattributesWhatsappnumberBodyParam = FromSchema<typeof schemas.PostApiV1UpdatecontactattributesWhatsappnumber.body>;
export type PostApiV1UpdatecontactattributesWhatsappnumberMetadataParam = FromSchema<typeof schemas.PostApiV1UpdatecontactattributesWhatsappnumber.metadata>;
export type PostApiV1UpdatecontactattributesformulticontactsBodyParam = FromSchema<typeof schemas.PostApiV1Updatecontactattributesformulticontacts.body>;
export type PostApiV2SendtemplatemessageBodyParam = FromSchema<typeof schemas.PostApiV2Sendtemplatemessage.body>;
export type PostApiV2SendtemplatemessageMetadataParam = FromSchema<typeof schemas.PostApiV2Sendtemplatemessage.metadata>;
export type PostApiV2SendtemplatemessagesBodyParam = FromSchema<typeof schemas.PostApiV2Sendtemplatemessages.body>;
