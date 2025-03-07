interface PostProfileProps {
    username: string;
    role: string;
  }
  
  export default function PostProfile({ username, role }: PostProfileProps) {
    return (
      <div className="space-y-2 w-full">
        <div className="flex items-center justify-between px-6 py-4 rounded-full bg-secondary/80 shadow-lg">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
              <div className="w-6 h-6 rounded-full bg-muted-foreground" />
            </div>
            <span className="text-white font-medium">{username}</span>
          </div>
          <span className="text-white/90">{role}</span>
        </div>
      </div>
    )
  }
  
  