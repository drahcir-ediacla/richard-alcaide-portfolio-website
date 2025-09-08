import React from 'react'
import styles from './SkillIcon.module.scss'

interface Props {
    icon: React.ReactNode;
    name: string;
}

const SkillIcon = ({icon, name}: Props) => {
  return (
    <div className={styles.container}>{icon} <span>{name}</span></div>
  )
}

export default SkillIcon