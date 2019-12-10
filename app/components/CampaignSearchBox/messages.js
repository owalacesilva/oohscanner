/*
 * CampaignSearchBox Messages
 *
 * This contains all the text for the CampaignSearchBox component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.CampaignSearchBox';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the CampaignSearchBox component!',
  },
  trymeHeader: {
    id: `${scope}.tryme.header`,
    defaultMessage: 'Try me!',
  },
  titleSection: {
    id: `${scope}.title.section`,
    defaultMessage: 'Onde vamos anunciar?',
  },
  trymeAtPrefix: {
    id: `${scope}.tryme.atPrefix`,
    defaultMessage: '@',
  },
});