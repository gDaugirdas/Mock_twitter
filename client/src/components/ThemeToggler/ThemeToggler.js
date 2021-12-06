import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import * as S from './ThemeToggler.styles';

const ThemeToggler = ({theme, toggleTheme}) => {
  const [checked, setChecked] = useState(true);

	useEffect(() => {
		setChecked(theme === 'light');
	}, [theme]);

  return (
    <S.SSwitchWrapper>
      <S.SSwitch onChange={toggleTheme} checked={checked} id='checkbox' type='checkbox' />
      <S.SSwitchLabel htmlFor='checkbox' />
      <S.SSwitchText>{checked ? 'Light' : 'Dark'} Mode</S.SSwitchText>
    </S.SSwitchWrapper>
  )
}

ThemeToggler.propTypes = {
  theme: PropTypes.string.isRequired,
  toggleTheme: PropTypes.func.isRequired
}

export default ThemeToggler


