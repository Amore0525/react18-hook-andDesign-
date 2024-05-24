//ErrorBoundary.tsx
import * as React from "react";
interface PropsType {
  children: React.ReactNode;
}
interface StateType {
  hasError: boolean;
  Error?: null | Error;
  ErrorInfo?: null | React.ErrorInfo;
}
export class ErrorBoundary extends React.Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);
    this.state = {
      hasError: false,
      Error: null,
      ErrorInfo: null,
    };
  }
  //控制渲染降级UI
  static getDerivedStateFromError(error: Error): StateType {
    return { hasError: true };
  }
  //捕获抛出异常
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    //传递异常信息
    this.setState((preState) => ({ hasError: preState.hasError, Error: error, ErrorInfo: errorInfo }));
    //可以将异常信息抛出给日志系统等等
    //do something....
  }
  render() {
    const { hasError, Error, ErrorInfo } = this.state;
    const { children } = this.props;
    //如果捕获到异常，渲染降级UI
    if (hasError) {
      return (
        <div>
          <h1>{`Error:${Error?.message}`}</h1>
          <details style={{ whiteSpace: "pre-wrap" }}>{ErrorInfo?.componentStack}</details>
        </div>
      );
    }
    return children;
  }
}