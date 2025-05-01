'use client';
import React, { useState, useEffect } from 'react';
import Header from './Header';
import Button from './Button';
import InviteCode from './InviteCode';
import Avatar from './Avatar';

const StatementUpload = () => {
  const [currentSet, setCurrentSet] = useState(0);
  const [statements, setStatements] = useState([
    { truth1: '', truth2: '', lie: '' },
    { truth1: '', truth2: '', lie: '' },
    { truth1: '', truth2: '', lie: '' },
  ]);
  const [countdown, setCountdown] = useState(100);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  const handleChange = (field: string, value: string) => {
    const updated = [...statements];
    updated[currentSet][field as keyof (typeof updated)[0]] = value;
    setStatements(updated);
  };

  const handleSubmit = () => {
    setSubmitted(true);

    const allSetsValid = statements.every(isValidSet);

    if (!allSetsValid) {
      alert(
        'Please complete all 3 sets (2 truths and 1 lie in each) before submitting.'
      );
      return;
    }

    const submission = statements.map((set) => ({
      truth1: set.truth1.trim(),
      truth2: set.truth2.trim(),
      lie: set.lie.trim(),
    }));

    console.log('Final submission:', submission);

    alert('All sets submitted successfully!');
  };

  const isValidSet = (set: any) =>
    set.truth1.trim() && set.truth2.trim() && set.lie.trim();

  // Circle logic
  const radius = 45;
  const stroke = 6;
  const normalizedRadius = radius - stroke / 2;
  const circumference = 2 * Math.PI * normalizedRadius;
  const progress = countdown / 100;
  const strokeDashoffset = circumference * (1 - progress);

  // Dynamic color
  let strokeColor = '#22C45E'; // default green
  if (countdown <= 30 && countdown > 10) strokeColor = '#F97316'; // orange
  if (countdown <= 10) strokeColor = '#DC2626'; // red

  // Dynamic text
  let displayText = `Waiting for other players ${countdown}s`;
  if (countdown <= 30 && countdown > 0) displayText = 'Lock in your entries !';
  if (countdown === 0) displayText = 'Time is up !';

  // Dynamic avatars
  let avatarsCount = 2;
  if (countdown <= 95) avatarsCount = 2;
  if (countdown <= 85) avatarsCount = 3;
  if (countdown <= 50) avatarsCount = 4;
  if (countdown <= 40) avatarsCount = 5;

  return (
    <div
      className="min-h-screen  flex items-center justify-center"
      style={{ backgroundImage: "url('/background/island-background.png')" }}
    >
      <div className='md:px-0 px-6'>
      <div className="w-full h-auto  max-w-2xl mx-auto bg-[#191919] rounded-2xl p-6 shadow-2xl  text-white relative font-sans">
        <Header title="2 Truths & A Lie - Waiting room" />

        {/* Players */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 mb-6">
            {[...Array(avatarsCount)].map((_, i) => (
              <div key={i} className="relative">
                <Avatar imageUrl="/avatar.png" size={30} />
                <span className="absolute -bottom-4 text-[10px] text-[#999999] left-1/2 -translate-x-1/2 mt-10">
                  typing
                </span>
              </div>
            ))}
            {[...Array(5 - avatarsCount)].map((_, i) => (
              <div
                key={i}
                className="bg-gray-700 rounded-full w-7 h-7 opacity-30 "
              />
            ))}
          </div>
          <span className="text-sm">{avatarsCount}/5 joined</span>
        </div>

        {/* Timer */}
        <div className="flex flex-col items-center justify-center mb-6">
          <div className="w-24 h-24 relative">
            <svg height="100" width="100">
              <circle
                stroke={strokeColor}
                fill="transparent"
                strokeWidth={stroke}
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                r={normalizedRadius}
                cx="50"
                cy="50"
                style={{
                  transform: 'rotate(180deg) scale(-1, 1)',
                  transformOrigin: '50% 50%',
                  transition: 'stroke-dashoffset 1s linear, stroke 0.3s ease',
                }}
              />
              <text
                x="50%"
                y="52%"
                dominantBaseline="middle"
                textAnchor="middle"
                fill="white"
                fontSize="20"
                fontWeight="bold"
              >
                {countdown}
              </text>
            </svg>
          </div>
          <p className="mt-2 text-sm text-gray-400">{displayText}</p>
          <div className="mt-4">
            <InviteCode code="04576" />
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 justify-start mb-4">
          {['Set 1', 'Set 2', 'Set 3'].map((label, idx) => (
            <button
              key={idx}
              onClick={() => {
                if (idx > currentSet && !isValidSet(statements[currentSet])) {
                  alert(
                    `Please complete all fields in Set ${currentSet + 1} before moving on.`
                  );
                  return;
                }
                setCurrentSet(idx);
              }}
              className={`px-4 py-1 rounded-md text-sm font-medium border cursor-pointer ${
                currentSet === idx
                  ? 'bg-[#1F1F1F] text-white border-white'
                  : 'bg-[#1F1F1F] text-[#999999] border-transparent'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Statement Inputs */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {['truth1', 'truth2', 'lie'].map((field) => (
            <textarea
              key={field}
              placeholder={field === 'lie' ? 'Lie' : 'Truth'}
              value={
                statements[currentSet][field as keyof (typeof statements)[0]]
              }
              onChange={(e) => handleChange(field, e.target.value)}
              className={`bg-[#141414] p-3 text-center overflow-hidden py-10 rounded-lg placeholder-gray-500 focus:outline-none resize-none h-28 leading-tight ${
                submitted &&
                !statements[currentSet][
                  field as keyof (typeof statements)[0]
                ].trim()
                  ? 'border border-red-500'
                  : ''
              }`}
            />
          ))}
        </div>
        <Button
          onClick={handleSubmit}
          label="Proceed to waiting room"
          disabled={!statements.every(isValidSet)}
        />
      </div>

      </div>
    
    </div>
  );
};

export default StatementUpload;
