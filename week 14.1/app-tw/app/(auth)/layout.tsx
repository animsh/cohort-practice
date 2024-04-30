export default function ({ children }): Readonly<{
  children: React.ReactNode;
}> {
  return (
    <div>
      <div className="border-b text-center">20% off if you signin now</div>
      {children}
    </div>
  );
}
