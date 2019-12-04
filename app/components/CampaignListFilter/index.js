/**
 *
 * CampaignListFilter
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function CampaignListFilter() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

CampaignListFilter.propTypes = {};

export default memo(CampaignListFilter);
