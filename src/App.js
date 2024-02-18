import React from 'react';
import Reporter from './Reporter';

const App = () => (
  <div>
    {/* Use Reporter with attribute 'name' */}
    <Reporter name="Antero Mertaranta" image="Mörkö.png">Löikö mörkö sisään</Reporter>

    {/* Use Reporter with children content and 'name' attribute */}
    <Reporter name="Kevin McGran">I know it's a rough time now, but did you at least enjoy playing in the tournament</Reporter>
  </div>
);

export default App;