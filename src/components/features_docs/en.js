import React from "react"
import { Card, Box, Grid, Image, Link, Alert } from 'theme-ui'
import quickStarImage from "../../../static/features/quick-star.svg"
import telescopeImage from "../../../static/features/telescope.svg"
import galaxyImage from "../../../static/features/galaxy.svg"
import bigDipperImage from "../../../static/features/big-dipper.svg"
import dayNightShiftImage from "../../../static/features/day-night-shift.svg"
import sunImage from "../../../static/features/sun.svg"
import { Link as IntlLink } from "gatsby-plugin-intl"



export default ({ children }) => (
    <Grid>
        {children}
        <h3>Lightweight android App for discuz! mobile</h3>
        {/* Some box */}
        <Grid gap={2} columns={[1, null, 3]} sx={{
            alignContent: 'center'
        }}>
            <Box>
                <Card sx={{

                }}>
                    <Image src={quickStarImage} />
                    <h2 color="primary">Fast</h2>
                    <p>Lightweight for mostly operations without ads</p>
                </Card>


            </Box>
            <Box>
                <Card sx={{

                }}>
                    <Image src={telescopeImage} />
                    <h2 color="primary">Powerful</h2>
                    <p>Support most discuz! mobile</p>
                </Card>
            </Box>
            <Box>
                <Card sx={{

                }}>
                    <Image src={galaxyImage} />
                    <h2 color="primary">Open source</h2>
                    <p>MIT Licensed software</p>
                </Card>
            </Box>
            <Box>
                <Card sx={{

                }}>
                    <Image src={bigDipperImage} />
                    <h2 color="primary">Secure</h2>
                    <p>No password will be locally stored</p>
                </Card>
            </Box>
            <Box>
                <Card sx={{

                }}>
                    <Image src={dayNightShiftImage} />
                    <h2 color="primary">Android Q+ support</h2>
                    <p>No risk permission will be asked</p>
                </Card>
            </Box>
            <Box>
                <Card sx={{

                }}>
                    <Image src={sunImage} />
                    <h2 color="primary">Light</h2>
                    <p>APK size &lt; 5MB</p>
                </Card>
            </Box>

        </Grid>
        <h2>Support requirements</h2>
        <ul>
            <li>Discuz! cored and version &gt;<b>X3.2</b></li>
            <li>API version &gt;<b>4</b></li>
            <li>Install the application "Mobile Forum" (Discuz! X3.4 version comes with and is enabled by default)</li>
            <li>Open mobile page and close anti-collection module</li>
            <li>Close other plugin that may interupt native API(eg. QianFan Plugin)</li>
        </ul>
        <h2>BBS support example</h2>
        <ul>
            <li> <Link href='https://bbs.nwpu.edu.cn'>NPU BBS</Link> </li>
            <li> <Link href='https://www.mcbbs.net'>MCBBS</Link> </li>
            <li> <Link href='https://keylol.com/'>keylol</Link> </li>
        </ul>
        <Alert variant="secondary">The bbses listed above are copyrighted and owned by their own and have no direct and indirect relations with us</Alert>

        <IntlLink to="/test-my-bbs/"
            sx={{
                color: "text",
                underline: "none"
            }}
        >
            <Alert variant="highlight" sx={{
                bg: "highlight",
                mt: 2

            }}>Click here to know if your bbs is compatible with discuzHub</Alert>
        </IntlLink>

        <h2>Full function list</h2>
        <ul>
            <li>App</li>
            <ul>
                <li>Two basic login types: password and webpage</li>
                <li>Multiple forums</li>
                <li>Multiple accounts</li>
                <li>Dark mode support</li>
                <li>Notification overview</li>
                <li>Hot thread and popular trend</li>
            </ul>
            <li>Forum</li>
            <ul>
                <li>Browse &amps; Read description</li>
                <li>Filter by tag and category</li>
                <li>See quick replies</li>
            </ul>
            <li>Thread</li>
            <ul>
                <li>Browse</li>
                <li>Filter by author</li>
                <li>Sort by time</li>
                <li>Quick reply</li>
                <li>Reply to author</li>
                <li>Rich text support</li>
                <li>Inline image render support</li>
                <li>Data saver mode for image</li>
                <li>Review images and download attachments</li>
            </ul>
            <li>Post</li>
            <ul>
                <li>Category type support</li>
                <li>Image support</li>
                <li>Meme support</li>
                <li>Rich text support</li>
                <li>Draft box auto-backup</li>
                <li>Failure backup</li>
                <li>Rich text support</li>
                <li>Add, delete, clear or modify drafts</li>
            </ul>
            <li>Notification</li>
            <ul>
                <li>System push</li>
                <li>Thread and post update</li>
                <li>Public and private message view and reply</li>
            </ul>
            <li>User</li>
            <ul>
                <li>Basic information</li>
                <li>HTML bio render</li>
                <li>View friend, posts and thread</li>
                <li>GIF avatar support</li>
            </ul>
            <li>Inline webview</li>
            <ul>
                <li>Auth freely</li>
                <li>Full support for mobile BBS</li>
            </ul>
        </ul>
    </Grid>
)