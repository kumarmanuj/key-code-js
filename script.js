const showKeyCodes = (e) => {
  console.log(e);
  const insert = document.getElementById('insert');
  insert.innerHTML = '';
  const keyCodes = {
    'Event Key': e.key === ' ' ? 'Space' : e.key,
    'Event KeyCode': e.keyCode,
    'Event Code': e.code,
    'Event Which': e.which,
  };

  for (let key in keyCodes) {
    const divCard = document.createElement('div');
    divCard.className = 'card';
    const divCardHeader = document.createElement('div');
    divCardHeader.className = 'card_header';
    const divCardMsg = document.createElement('div');
    divCardMsg.className = 'card_message';
    const divCardFooter = document.createElement('div');
    divCardFooter.className = 'card_footer';

    let footerText = '';
    switch (key) {
      case 'Event Key':
        footerText = 'Returns the character or name of the key pressed';
        break;
      case 'Event KeyCode':
        footerText =
          'A deprecated property representing a system-dependent numeric code for the key';
        break;
      case 'Event Code':
        footerText =
          "Returns a physical key code representing the key's position on the keyboard";
        break;
      case 'Event Which':
        footerText =
          'A deprecated property that normalizes keyCode and charCode';
        break;
      default:
        footerText = '';
    }

    const keyText = document.createTextNode(key);
    const keyMessage = document.createTextNode(keyCodes[key]);
    const keyFooter = document.createTextNode(footerText);

    divCardHeader.appendChild(keyText);
    divCardMsg.appendChild(keyMessage);
    divCardFooter.appendChild(keyFooter);
    divCard.appendChild(divCardHeader);
    divCard.appendChild(divCardMsg);
    divCard.appendChild(divCardFooter);
    insert.appendChild(divCard);
  }

  const divNote = document.createElement('div');
  divNote.className = 'note';
  const note = document.createTextNode(
    "Browser Compatibility - The newer key and code properties have good support in modern browsers, but older browsers may require fallbacks to keyCode or which. It's recommended to use key or code when possible for better cross-browser consistency."
  );
  divNote.appendChild(note);
  insert.append(divNote);
};

window.addEventListener('keydown', showKeyCodes);
