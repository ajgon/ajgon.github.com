  new Element('span').setProperty('class', 'top').injectInside($('detail'));
  new Element('span').setProperty('id', 'close').appendText('Close').injectInside($('detail'));
  new Element('h2').appendText('Respectance - share your memories').injectInside($('detail'));
  rightColumn = new Element('div').setProperty('class', 'right-column').injectInside($('detail'));
    new Element('div').setProperties({'id': 'icon', 'class': 'preview'}).injectInside(rightColumn);
      new Element('img').setProperties({'alt': 'Logo of project respectance', 'src': 'images/portfolio/respectance_logo.png'}).injectInside($('icon'));
    new Element('div').setProperties({'id': 'preview', 'class': 'preview'}).injectInside(rightColumn);
      new Element('img').setProperties({'id': 'bigpreview', 'alt': 'Slice of project respectance', 'src': 'images/portfolio/respectance.png'}).injectInside($('preview'));
  new Element('img').setProperties({'id': 'thumb', 'alt': 'Sample page of project respectance', 'src': 'images/portfolio/respectance_view.png'}).injectInside($('detail'));
  info = new Element('div').setProperty('class', 'info').injectInside($('detail'));
    left = new Element('div').setProperty('class', 'left').injectInside(info);
      new Element('h3').appendText('Where?').injectInside(left);
      p = new Element('p').injectInside(left);
        new Element('a').setProperties({'href': 'http://www.respectance.com/', 'target': '_blank'}).appendText('http://www.respectance.com/').injectInside(p);
      new Element('h3').appendText('When?').injectInside(left);
      new Element('p').appendText('Jun 01, 2007'). injectInside(left);
      new Element('h3').appendText('What?').injectInside(left);
      new Element('p').appendText('XHTML1.0, CSS2.1, JS1.5'). injectInside(left);
    right = new Element('div').setProperty('class', 'right').injectInside(info);
      new Element('h3').appendText('Description?').injectInside(right);
      new Element('p').appendText('Respectance is an interactive community for sharing memories. Connecting you with others who understand helps you through a difficult time - allowing you and your loved ones to live on.'). injectInside(right);
  new Element('span').setProperty('class', 'bottom').injectInside($('detail'));
