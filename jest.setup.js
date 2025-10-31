/* eslint-disable no-undef */

jest.mock('@react-native-async-storage/async-storage', () => {
  const asyncStorage = {};
  return {
    getItem: async key => asyncStorage[key],
    setItem: async (key, value) => (asyncStorage[key] = value),
    removeItem: async key => delete asyncStorage[key],
  };
});

jest.mock('react-native/src/private/specs_DEPRECATED/components/DebuggingOverlayNativeComponent', () => 'View');

jest.mock("react-native-pager-view", () => {
  const React = require("react");
  const View = require("react-native").View;

  return class ViewPager extends React.Component {
    setPage() {}
    setPageWithoutAnimation() {}
    setScrollEnabled() {}

    render() {
      const {
        children,
        initialPage,
        onPageScroll,
        onPageScrollStateChanged,
        onPageSelected,
        style,
        scrollEnabled,
        accessibilityLabel,
      } = this.props;

      return (
        <View
          testID={this.props.testID}
          initialPage={initialPage}
          onPageScroll={onPageScroll}
          onPageScrollStateChanged={onPageScrollStateChanged}
          onPageSelected={onPageSelected}
          style={style}
          scrollEnabled={scrollEnabled}
          accessibilityLabel={accessibilityLabel}>
          {children}
        </View>
      );
    }
  };
});
jest.mock('react-native-pager-view', () => {
  return {
    PagerView: 'PagerView',
  };
});