import { shallowMount } from '@vue/test-utils';
import ImageButton from '@/components/ImageButton.vue';

describe('ImageButton.vue', () => {
    it('renders props.msg when passed', () => {
        const msg = 'new message';
        const wrapper = shallowMount(ImageButton, {
            propsData: { msg },
        });
        expect(wrapper.text()).toMatch(msg);
    });
});
