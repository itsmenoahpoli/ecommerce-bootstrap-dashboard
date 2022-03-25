import React from "react";
import { useRouter } from "next/router";
import { Breadcrumb } from "react-bootstrap";

export const AppBreadcrumb = () => {
  const router = useRouter();

  const renderBreadcrumbLinks = () => {
    let links = router.pathname.split("/");

    return links.map((_, idx) =>
      _ === "" ? null : <Breadcrumb.Item key={idx}>{_}</Breadcrumb.Item>
    );
  };

  return (
    <Breadcrumb>
      <Breadcrumb.Item active>Dashboard &mdash;</Breadcrumb.Item>
      {renderBreadcrumbLinks()}
    </Breadcrumb>
  );
};
