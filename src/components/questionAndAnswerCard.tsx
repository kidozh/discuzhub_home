import React from "react"
import { Card, jsx, Heading } from "theme-ui"

export default ({ children, subject }) => (
    <Card sx={{
        mt:2,
        p:[1,2,4],
        borderBottomWidth: '0.05rem',
        borderBottomStyle:'dashed',
        borderBottomColor:'muted'
    }}>
        <Heading as="h2" sx={{
          mt:[1,2,2],
          mb:[1,2,2],
        }}>{subject}🤔</Heading>
        {children}
    </Card>
)