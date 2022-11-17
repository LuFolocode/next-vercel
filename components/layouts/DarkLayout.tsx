import { ScriptProps } from "next/script"
import { FC, PropsWithChildren } from "react"

export const DarkLayout:  React.FC<PropsWithChildren<ScriptProps>> =({children}) => {
  return (
    <div style={{
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderRadius: '5px',
        padding: '10px'
    }}>
        <h3>Dark-Layout</h3>
        <div>
            {children}
        </div>

    </div>
  )
}
