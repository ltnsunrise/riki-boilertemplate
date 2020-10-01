import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from 'components/A';
import Wrapper from './Wrapper';
import messages from './messages';

function Footer() {
  return (
    <Wrapper>
      <section>This project is wonderful</section>

      <section>
        <FormattedMessage
          {...messages.authorMessage}
          values={{
            author: <A href="#">Max Stoiber</A>,
          }}
        />
      </section>
    </Wrapper>
  );
}

export default Footer;
