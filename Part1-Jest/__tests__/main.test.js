const formatVolumeIconPath = require('../assets/scripts/main');

describe('formatVolumeIconPath Tester', () => {
    // Min volume, expect volume to be level 0 
    test('Min volume', () => {
        expect(formatVolumeIconPath(0)).toContain('level-0');
    });
    // Lower bounder of Icon 1
    test('Lower bounder of Icon 1', () => {
        expect(formatVolumeIconPath(1)).toContain('level-1');
    });
    // Upper bounder of Icon 1
    test('Upper bounder of Icon 1', () => {
        expect(formatVolumeIconPath(33)).toContain('level-1');
    });
    // Lower bounder of Icon 2
    test('Lower bounder of Icon 2', () => {
        expect(formatVolumeIconPath(34)).toContain('level-2');
    });
    // Upper bounder of Icon 2
    test('Upper bounder of Icon 2', () => {
        expect(formatVolumeIconPath(66)).toContain('level-2');
    });
    // Lower bounder of Icon 3
    test('Lower bounder of Icon 3', () => {
        expect(formatVolumeIconPath(67)).toContain('level-3');
    });
    // Upper bounder of Icon 3
    test('Upper bounder of Icon 3', () => {
        expect(formatVolumeIconPath(100)).toContain('level-3');
    });
});
