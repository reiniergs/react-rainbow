/* eslint-disable id-length */
import resolverUpLeft from '../resolverUpLeft';

describe('resolverUpLeft', () => {
    it('should return the correct topLeft position', () => {
        const param = {
            trigger: {
                leftUpAnchor: {
                    x: 209,
                    y: 658,
                },
                leftBottomAnchor: {
                    x: 209,
                    y: 698,
                },
                rightUpAnchor: {
                    x: 249,
                    y: 658,
                },
                rightBottomAnchor: {
                    x: 249,
                    y: 698,
                },
            },
            viewport: {
                width: 1100,
                height: 761,
            },
            content: {
                height: 220,
                width: 220,
            },
        };
        const expected = {
            bottom: param.viewport.height - param.trigger.leftUpAnchor.y,
            left: param.trigger.leftBottomAnchor.x,
        };

        expect(resolverUpLeft(param)).toEqual(expected);
    });
});
