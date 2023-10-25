import Button from './Button';

export default {
    title: 'stories/Button',
    component: Button,
};

export const Primary = {
    args: {
        label: 'Button',
        size: 'small',
    },
};
export const Secondary = {
    args: {
        label: 'Button',
        size: 'medium',
        variant: 'secondary',
    },
};
export const Danger = {
    args: {
        label: 'Button',
        size: 'large',
        variant: 'danger',
    },
};
