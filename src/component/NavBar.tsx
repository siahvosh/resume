import * as React from 'react';
import { extendTheme, styled } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BarChartIcon from '@mui/icons-material/BarChart';
import DescriptionIcon from '@mui/icons-material/Description';
import LayersIcon from '@mui/icons-material/Layers';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';
import StockChart, {AreaChart} from "./AreaChart.tsx";

const NAVIGATION: Navigation = [
    {
        kind: 'header',
        title: 'Main items',
    },
    {
        segment: 'dashboard',
        title: 'Dashboard',
        icon: <DashboardIcon />,
        navigator:<StockChart width={400} height={200}/>,

    },
    {
        segment: 'orders',
        title: 'Orders',
        icon: <ShoppingCartIcon />,
    },
    {
        kind: 'divider',
    },
    {
        kind: 'header',
        title: 'Analytics',
    },
    {
        segment: 'reports',
        title: 'Reports',
        icon: <BarChartIcon />,
        children: [
            {
                segment: 'sales',
                title: 'Sales',
                icon: <DescriptionIcon />,
            },
            {
                segment: 'traffic',
                title: 'Traffic',
                icon: <DescriptionIcon />,
            },
        ],
    },
    {
        segment: 'integrations',
        title: 'Integrations',
        icon: <LayersIcon />,
    },
];

const demoTheme = extendTheme({
    colorSchemes: { light: true, dark: true },
    colorSchemeSelector: 'class',
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 600,
            lg: 1200,
            xl: 1536,
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    "&:hover": {
                        backgroundColor: "#d30202", // رنگ هنگام هاور
                        color: "#fff",
                    },
                },
            },
        },
        MuiListItem: {
            styleOverrides: {
                root: {
                    "&.Mui-selected": {
                        backgroundColor: "#da0909", // رنگ سلکت شده
                        color: "#a41b1b",
                        "&:hover": {
                            backgroundColor: "#d30202", // رنگ هاور وقتی سلکت شده
                        },
                    },
                },
            },
        },
    },
});

function useDemoRouter(initialPath: string): Router {
    const [pathname, setPathname] = React.useState(initialPath);

    const router = React.useMemo(() => {
        return {
            pathname,
            searchParams: new URLSearchParams(),
            navigate: (path: string | URL) => setPathname(String(path)),
        };
    }, [pathname]);

    return router;
}


export const NavBar = (props:  any) => {
        const [session, setSession] = React.useState<Session | null>({
            user: {
                name: 'Bharat Kashyap',
                email: 'bharatkashyap@outlook.com',
                image: 'https://avatars.githubusercontent.com/u/19550456',
            },
        });
        const authentication = React.useMemo(() => {
            return {
                signIn: () => {
                    setSession({
                        user: {
                            name: 'Bharat Kashyap',
                            email: 'bharatkashyap@outlook.com',
                            image: 'https://avatars.githubusercontent.com/u/19550456',
                        },
                    });
                },
                signOut: () => {
                    setSession(null);
                },
            };
        }, []);
        const { window } = props;

        const router = useDemoRouter('/dashboard');

        const demoWindow = window ? window() : undefined;

        return (
            <AppProvider
                session={session}
                navigation={NAVIGATION}
                router={router}
                authentication={authentication}
                theme={demoTheme}
                window={demoWindow}
                branding={{
                    logo: <img/>,
                    title: 'BI Dashboard',
                    homeUrl: '/toolpad/core/introduction',
                }}
            >
                <DashboardLayout>
                    <PageContainer>
                        {/*<StockChart width={400} height={200} />*/}
                        {router.pathname === '/dashboard' && <StockChart width={400} height={200} />}
                    </PageContainer>
                </DashboardLayout>
            </AppProvider>
        )
}