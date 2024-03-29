import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { InView } from 'react-intersection-observer';

const VerticalTimelineElement = ({
  children,
  className,
  contentArrowStyle,
  headerStyle,
  contentStyle,
  date,
  dateClassName,
  icon,
  iconClassName,
  iconOnClick,
  onTimelineElementClick,
  iconStyle,
  id,
  position,
  style,
  textClassName,
  intersectionObserverProps,
  visible,
}) => (
  <InView {...intersectionObserverProps}>
    {({ inView, ref }) => (
      <div
        ref={ref}
        id={id}
        className={classNames(className, 'vertical-timeline-element', {
          'vertical-timeline-element--left': position === 'left',
          'vertical-timeline-element--right': position === 'right',
          'vertical-timeline-element--no-children': children === '',
        })}
        style={style}
      >
        <>
          <span
            style={iconStyle}
            onClick={iconOnClick}
            className={classNames(
              iconClassName,
              'vertical-timeline-element-icon',
              {
                'bounce-in': inView || visible,
                'is-hidden': !(inView || visible),
              },
            )}
          >
            {icon}
          </span>
          <div
            style={contentStyle}
            onClick={onTimelineElementClick}
            className={classNames(
              textClassName,
              'vertical-timeline-element-content',
              {
                'bounce-in': inView || visible,
                'is-hidden': !(inView || visible),
              },
            )}
          >
            <div className="vertical-timeline-element-content-header" style={headerStyle} />
            <div
              style={contentArrowStyle}
              className="vertical-timeline-element-content-arrow"
            />
            {children}
            <span
              className={classNames(
                dateClassName,
                'vertical-timeline-element-date',
              )}
            >
              <b>{date}</b>
            </span>
          </div>
        </>
      </div>
    )}
  </InView>
);

VerticalTimelineElement.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  className: PropTypes.string,
  contentArrowStyle: PropTypes.shape({}),
  headerStyle: PropTypes.shape({}),
  contentStyle: PropTypes.shape({}),
  date: PropTypes.node,
  dateClassName: PropTypes.string,
  icon: PropTypes.element,
  iconClassName: PropTypes.string,
  iconStyle: PropTypes.shape({}),
  iconOnClick: PropTypes.func,
  onTimelineElementClick: PropTypes.func,
  id: PropTypes.string,
  position: PropTypes.string,
  style: PropTypes.shape({}),
  textClassName: PropTypes.string,
  visible: PropTypes.bool,
  intersectionObserverProps: PropTypes.shape({
    root: PropTypes.shape({}),
    rootMargin: PropTypes.string,
    threshold: PropTypes.number,
    triggerOnce: PropTypes.bool,
  }),
};

VerticalTimelineElement.defaultProps = {
  children: '',
  className: '',
  contentArrowStyle: null,
  headerStyle: null,
  contentStyle: null,
  icon: null,
  iconClassName: '',
  iconOnClick: null,
  onTimelineElementClick: null,
  iconStyle: null,
  id: '',
  style: null,
  date: '',
  dateClassName: '',
  position: '',
  textClassName: '',
  visible: false,
  intersectionObserverProps: {
    rootMargin: '0px 0px -40px 0px',
    triggerOnce: true,
  },
};

export default VerticalTimelineElement;
