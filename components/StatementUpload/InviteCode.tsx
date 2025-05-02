interface InviteCodeProps {
    code: string;
  }
  
  const InviteCode = ({ code }: InviteCodeProps) => {
    return (
      <div className="flex justify-center">
        <div className="bg-secondary-background px-4 py-1 rounded-lg text-sm">
          Invite code: <span className="text-white">{code}</span>
        </div>
      </div>
    );
  };
  
  export default InviteCode;
  